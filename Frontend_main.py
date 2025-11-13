import streamlit as st


Landing_page = st.Page("pages/Landing_page.py", title = "Landing Page")#Home
main_page = st.Page("pages/LogIn.py", title = "LogIn")
page_2 = st.Page("pages/SignUp.py", title = "SignUp")
Dashboard = st.Page("pages/Dashboard.py", title = "Dashboard")

pg = st.navigation([Landing_page, page_2, main_page, Dashboard], position="top")

pg.run()

