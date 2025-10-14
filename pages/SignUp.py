import streamlit as st
import requests

API_URL = "http://127.0.0.1:8000"  # FastAPI server


st.set_page_config(page_title="Auth Demo", page_icon="🔐", layout="centered")

# --- Page Title ---
st.title("Register User")


with st.container(border=True):
    st.subheader("Create a new account")
    reg_username = st.text_input("Username", key="reg_user")
    reg_password = st.text_input("Password", type="password", key="reg_pass")
    if st.button("Register"):
        if reg_username and reg_password:
            response = requests.post(f"{API_URL}/register", json={
                "username": reg_username,
                "password": reg_password
            })
            if response.status_code == 200:
                st.success("✅ Registration successful! You can now log in.")
                st.switch_page("pages/Dashboard.py")
            elif response.status_code == 400:
                st.error("⚠️ Username already exists.")
            else:
                st.error("❌ Registration failed.")
        else:
            st.warning("Please enter username and password.")

st.page_link("pages/LogIn.py", label="Already have an account")            