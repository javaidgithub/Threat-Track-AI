import streamlit as st
import requests
import datetime
import pandas as pd
import matplotlib.pyplot as plt

baseurl = "http://127.0.0.1:8000"

st.title("Log Analysis Dashboard")

# === Form for manual log entry ===
with st.form("My_form"):
    x = st.text_input("Enter the log")
    submitted = st.form_submit_button("Submit")


    if submitted:
        log = {"log": x}
        try:
            res = requests.post(f"{baseurl}/process_log/", json=log)
            if res.status_code == 200:
                st.success(res.json())  # show response from FastAPI
            else:
                st.error(f"Error {res.status_code}: {res.text}")
        except requests.exceptions.RequestException as e:
            st.error(f"Request failed: {e}")

# === File uploader ===
uploaded_file = st.file_uploader("Upload File", type=["csv"])
if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    st.write(df)

    st.success(f"📊 Total Rows: {len(df)}")

    # ---- Log Level Column ----
    if "log_level" in df.columns:
        st.subheader("📊 Log Level Distribution")
        log_counts = df["log_level"].value_counts()
        st.table(log_counts)

    # ---- Request Column ----
    if "request_method" in df.columns:
        st.subheader("📊 Request Distribution")
        req_counts = df["request_method"].value_counts()
        st.table(req_counts)
