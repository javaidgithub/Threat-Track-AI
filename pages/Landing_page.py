import streamlit as st

# ================= HEADER SECTION =================
col1, col2 = st.columns([4, 1])

with col1:
    st.title("Threat Track AI")
    st.header("AI powered log analysis and threat detection")

with col2:
    with st.container(border=True):
        st.page_link("pages/SignUp.py", label="Sign Up")
    with st.container(border=True):    
        st.page_link("pages/LogIn.py", label="Log In")




# ================= ABOUT PRODUCT =================
st.subheader("📖 About Product")
st.write(
    "Threat Track AI is an AI-powered log analysis and monitoring system designed to detect anomalies, "
    "track threats, and provide real-time security insights for organizations. "
    "It supports multiple log formats, ensures scalability, and can be deployed on local company servers "
    "for secure data handling."
)


st.text("")

# ================= FEATURES SECTION =================
st.subheader("🔐 Key Security Areas")

col1, col2, col3, col4 = st.columns(4)

with col1:
    with st.container(border=True):
        st.markdown("#### Endpoint Security")
        st.write("- Configuration Assessment")
        st.write("- Malware Detection")
        st.write("- File Integrity Monitoring")

with col2:
    with st.container(border=True):
        st.markdown("#### Threat Intelligence")
        st.write("- Threat Hunting")
        st.write("- Log Data Analysis")
        st.write("- Vulnerability Detection")

with col3:
    with st.container(border=True):
        st.markdown("#### Security Operations")
        st.write("- Incident Response")
        st.write("- Regulatory Compliance")
        st.write("- IT Hygiene")

with col4:
    with st.container(border=True):
        st.markdown("#### Cloud Security")
        st.write("- Container Security")
        st.write("- Posture Management")
        st.write("- Workload Protection")



st.text("")
# ================= PROBLEMS IN EXISTING SYSTEMS =================

with st.container(border=True):
    st.subheader("⚠️ Problems in Existing Systems")

    col1, col2, col3 = st.columns(3)

    with col1:
        st.subheader("✦ Lack of Real-time Monitoring")
        st.write("Most systems detect issues late, leaving networks vulnerable to active threats.")

    with col2:
        st.subheader("✦ High False Positives")
        st.write("Too many irrelevant alerts overwhelm analysts, slowing down real responses.")

    with col3:
        st.subheader("✦ Poor Integration")
        st.write("Difficulty in combining logs from servers, apps, cloud, and endpoints.")


    st.text("")
    col4, col5, col6 = st.columns(3)

    with col4:
        st.subheader("✦ Scalability Issues")
        st.write("Legacy tools cannot handle massive log data in growing enterprises.")

    with col5:
        st.subheader("✦ Limited Threat Intelligence")
        st.write("Existing tools rarely leverage AI/ML for predictive detection.")

    with col6:
        st.subheader("✦ Manual Dependency")
        st.write("Heavily dependent on human analysts, slowing down investigations.")


st.text("")

# ================= ADVANTAGES SECTION =================
st.subheader("✅ Advantages of Threat Track AI")

col1, col2, col3 = st.columns(3)

with col1:
    st.write("➜ Real-time anomaly detection")
    st.write("➜ Reduced false positives")

with col2:
    st.write("➜ AI-powered predictive analysis")
    st.write("➜ Scalable for enterprise use")

with col3:
    st.write("➜ Local deployment for privacy")
    st.write("➜ Easy integration with existing systems")




# ================= USE CASES SECTION =================
st.subheader("🏢 Who Can Benefit?")

st.text("")

st.write("💼 **Corporate Enterprises** ► Protect internal systems and employee data")
st.write("🏦 **Financial Institutions** ► Detect fraud and compliance violations")
st.write("🌐 **IT & Cloud Companies** ► Secure infrastructure and client workloads")
st.write("🏛️ **Government Agencies** ► Enhance national cybersecurity posture")
st.write("📊 **SMEs** ► Affordable AI-based monitoring for small businesses")





# ================= IMAGE / BANNER =================
st.image("22.png", width='stretch')
st.markdown("---")


# ================= FAQ SECTION =================
st.subheader("📌 Frequently Asked Questions")

with st.expander("What is Threat Track AI?"):
    st.write(
        "Threat Track AI is an AI-powered log analysis and monitoring system designed to detect anomalies, track threats, "
        "and provide real-time security insights for organizations. It supports multiple log formats, ensures scalability, "
        "and can be deployed on local company servers for secure data handling."
    )

with st.expander("How does Threat Track AI detect threats?"):
    st.write(
        "The system uses machine learning models like Isolation Forest for anomaly detection, combined with rule-based analysis "
        "and preprocessing of heterogeneous logs. This helps identify unusual patterns in real time, such as unauthorized "
        "access attempts, suspicious activities, or compliance violations."
    )

with st.expander("Can Threat Track AI work with existing company systems?"):
    st.write(
        "Yes. Threat Track AI is designed to integrate with diverse data sources, including web servers, authentication systems, "
        "applications, and databases. All logs can be streamed into the dashboard where anomalies are detected and alerts are generated."
    )

with st.expander("Who can benefit from Threat Track AI?"):
    st.write(
        "Organizations of any size that want to strengthen cybersecurity, monitor compliance, and improve incident response can benefit. "
        "It’s especially useful for companies that require local deployment instead of cloud-only solutions, ensuring data privacy and control."
    )


st.markdown("© 2025 Threat Track AI | Built with ❤️ using Streamlit")
st.markdown("[Privacy Policy](#) | [Contact Us](#)")


