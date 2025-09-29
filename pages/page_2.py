import streamlit as st
import yaml 
from yaml.loader import SafeLoader
import streamlit_authenticator as stauth

st.title("Threat Track AI -- Sign Up")

with open('config.yaml') as file:
    config = yaml.load(file, Loader=SafeLoader)

authenticator = stauth.Authenticate(
    config['credentials'],
    config['cookie']['name'],
    config['cookie']['key'],
    config['cookie']['expiry_days']
)

try:
    email, username, name = authenticator.register_user(captcha=False, password_hint=False)

    if email:  # If form was submitted
        if email.endswith("@riphah.edu.pk")or email.endswith("@gmail.com"):
            st.success(f"User {name} ({username}) registered successfully!")
            # TODO: save user details in your config or DB
        else:
            st.error("Only emails ending with @riphah.edu.pk are allowed to register.")
except Exception as e:
    st.error(e)


st.markdown("---")  # horizontal line for separation

st.page_link("pages/page_3.py", label="Already Have An Account")



st.logo(
    "112.jpg",
    size="large"
)

# if st.session_state.get('authentication_status'):
#     st.success('Yoe are Login Successfully')
#     st.write(f'Welcome *{st.session_state.get("name")}*')
#     st.title('Some content')
# elif st.session_state.get('authentication_status') is False:
#     st.error('Username/password is incorrect')
# elif st.session_state.get('authentication_status') is None:
#     st.warning('Please enter your username and password')

#     if st.button("Reset Password"):
#         try:
#             if authenticator.reset_password(st.session_state.get("username")):
#                 st.success("Password modified successfully")
#         except Exception as e:
#             st.error(e)


# try:
#     authenticator.login()
# except Exception as e:
#     st.error(e)    



# with st.form("Sign Up Form"):
#     username = st.text_input("Username")
#     email = st.text_input("Email")
#     password = st.text_input("Password", type = "password")
#     confirm_password = st.text_input("Confirm Password", type="password")
#     submit = st.form_submit_button("Sign Up")

# if submit:
#     if not username or not email or not password or not confirm_password:
#         st.error("All fields are required")
#     elif password != confirm_password:
#         st.error("Password not matched")
#     else:
#         st.success("SignUp Successfully")


