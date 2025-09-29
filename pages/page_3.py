import streamlit as st
import yaml 
from yaml.loader import SafeLoader
import streamlit_authenticator as stauth
import pandas as pd
import plotly.express as px
import sqlite3


with open('config.yaml') as file:
    config = yaml.load(file, Loader=SafeLoader)

authenticator = stauth.Authenticate(
    config['credentials'],
    config['cookie']['name'],
    config['cookie']['key'],
    config['cookie']['expiry_days']
)


try:
    st.title("Threat Track AI")
    authenticator.login()
except Exception as e:
    st.error(e)


if st.session_state.get('authentication_status'):
    st.success(f'Welcome *{st.session_state.get("name")}*')
    st.title('Some content')


            
    st.set_page_config(page_title="Log Analysis Dashboard", layout="wide")

    # ---------- Title ----------
    st.markdown(
        """
        <h2 style="text-align:center; color:#4CAF50;">📊 Log Analysis Dashboard</h2>
        <p style="text-align:center; color:gray;">Analyze, filter and visualize your system logs in real-time</p>
        """,
        unsafe_allow_html=True,
    )

    # --------- Upload Section ----------
    st.sidebar.header("⚙️ Settings")
    uploaded_file = st.sidebar.file_uploader("📂 Upload CSV Log File", type=["csv"])

    # Optional: connect to SQLite database
    use_db = st.sidebar.checkbox("Use SQLite Database")
    if use_db:
        db_file = st.sidebar.text_input("Database Path", "logs.db")
        table_name = st.sidebar.text_input("Table Name", "logs")

    # --------- Load Logs ----------
    df = None
    if uploaded_file:
        df = pd.read_csv(uploaded_file)
    elif use_db:
        try:
            conn = sqlite3.connect(db_file)
            df = pd.read_sql(f"SELECT * FROM {table_name}", conn)
            conn.close()
        except Exception as e:
            st.error(f"❌ Database error: {e}")

    # --------- Display Logs ----------
    if df is not None:
        # Convert timestamp if exists
        if "timestamp" in df.columns:
            try:
                df["timestamp"] = pd.to_datetime(df["timestamp"])
            except:
                pass

        # Sidebar Filters inside expander
        with st.sidebar.expander("🔍 Advanced Filters", expanded=False):
            if "level" in df.columns:
                log_levels = st.multiselect("Filter by Level", df["level"].unique())
                if log_levels:
                    df = df[df["level"].isin(log_levels)]

            if "source" in df.columns:
                sources = st.multiselect("Filter by Source", df["source"].unique())
                if sources:
                    df = df[df["source"].isin(sources)]

            if "timestamp" in df.columns:
                try:
                    min_date, max_date = df["timestamp"].min(), df["timestamp"].max()
                    date_range = st.date_input("Select Date Range", [min_date, max_date])
                    if len(date_range) == 2:
                        start, end = date_range
                        df = df[(df["timestamp"] >= pd.to_datetime(start)) & (df["timestamp"] <= pd.to_datetime(end))]
                except:
                    st.warning("⚠️ Timestamp column not in datetime format")

        # ---------- Tabs ----------
        tab1, tab2, tab3, tab4 = st.tabs(["📋 Logs", "📈 Statistics", "📊 Charts", "🔎 Search"])

        with tab1:
            st.subheader("📋 Raw Logs")
            st.dataframe(df, use_container_width=True)

            # Download filtered logs
            csv = df.to_csv(index=False).encode("utf-8")
            st.download_button("⬇️ Download Filtered Logs", data=csv, file_name="filtered_logs.csv", mime="text/csv")

        with tab2:
            st.subheader("📈 Log Statistics")
            col1, col2, col3 = st.columns(3)
            col1.metric("Total Logs", len(df))
            if "level" in df.columns:
                col2.metric("Unique Levels", df["level"].nunique())
            if "source" in df.columns:
                col3.metric("Sources", df["source"].nunique())

        with tab3:
            st.subheader("📊 Visualizations")
            if "level" in df.columns:
                level_counts = df["level"].value_counts().reset_index()
                fig1 = px.bar(level_counts, x="index", y="level", color="index",
                            title="Logs by Level", labels={"index":"Level", "level":"Count"})
                st.plotly_chart(fig1, use_container_width=True)

            if "timestamp" in df.columns:
                logs_over_time = df.groupby(df["timestamp"].dt.date).size().reset_index(name="count")
                fig2 = px.line(logs_over_time, x="timestamp", y="count", markers=True,
                            title="Logs Over Time", line_shape="spline")
                st.plotly_chart(fig2, use_container_width=True)

            if "source" in df.columns:
                source_counts = df["source"].value_counts().reset_index()
                fig3 = px.pie(source_counts, names="index", values="source", hole=0.4,
                            title="Logs by Source")
                st.plotly_chart(fig3, use_container_width=True)

        with tab4:
            st.subheader("🔍 Search Logs")
            search_term = st.text_input("Enter keyword to search in logs")
            if search_term:
                search_results = df[df.astype(str).apply(lambda x: x.str.contains(search_term, case=False, na=False)).any(axis=1)]
                st.success(f"✅ Found {len(search_results)} matching logs")
                st.dataframe(search_results, use_container_width=True)

            else:
                st.info("👈 Upload a CSV log file or connect to a SQLite database to begin.")




    authenticator.logout()
elif st.session_state.get('authentication_status') is False:
    st.error('Username/password is incorrect')
    st.page_link("pages/page_2.py", label="Click Here For Sign Up")
elif st.session_state.get('authentication_status') is None:
    st.warning('Please enter your username and password')
    st.page_link("pages/page_2.py", label="Click Here For Sign Up")



