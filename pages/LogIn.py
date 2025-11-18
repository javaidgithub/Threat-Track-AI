import streamlit as st
import requests

API_URL = "http://127.0.0.1:8000"  # FastAPI server


st.set_page_config(page_title="Auth Demo", page_icon="🔐", layout="centered")

# --- Page Title ---
st.title(" LogIn User")


if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

with st.container(border=True):
    st.subheader("Log in to your account")
    login_username = st.text_input("Username", key="login_user")
    login_password = st.text_input("Password", type="password", key="login_pass")
    if st.button("Login"):
        if login_username and login_password:
            response = requests.post(f"{API_URL}/login", json={
                "username": login_username,
                "password": login_password
            })
            if response.status_code == 200:
                st.session_state.logged_in = True
                if st.session_state.logged_in:
                    st.success("✅ Login successful!")
                    st.switch_page("pages/Dashboard.py")
            else:
                st.error("❌ Invalid username or password.")
        else:
            st.warning("Please enter username and password.")


st.page_link("pages/SignUp.py", label="Create Account")