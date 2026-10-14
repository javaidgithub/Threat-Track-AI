# Threat Track AI

Threat Track AI is a scalable multi-agent framework for automated cybersecurity log analysis and threat detection. The project combines log preprocessing, anomaly detection, and AI-assisted investigation workflows to help identify suspicious activity and support cybersecurity monitoring at scale.

## Research Paper

Threat Track AI: A Scalable Multi-Agent Framework for Automated Cybersecurity Log Analysis and Threat Detection
[6th International Conference on Digital Futures and Transformative Technologies (ICoDT2)]

## Overview

This repository contains the experimental and application assets for a cybersecurity-focused AI system designed to analyze web/server logs, detect anomalies, and support intelligent threat investigation. It includes:

- Streamlit-based user interfaces for login, signup, and dashboard interactions
- Jupyter notebooks for preprocessing, anomaly detection, and fine-tuning
- Agent-oriented AI experiments for reasoning and analysis support
- CSV datasets and related artifacts used across project stages

## Project Flow

1. Collect or upload web/server log data.
2. Preprocess logs into model-friendly formats.
3. Apply anomaly detection and AI-based analysis.
4. Use multi-agent reasoning to interpret suspicious behavior.
5. Visualize findings in the dashboard interface.

## Repository Structure

- `pages/` — frontend UI pages for the application
- `Stage_1/`, `Stage-2/`, `Stage_3/` — project development stages and experimentation
- `AI_Agent/` — AI and agent-related notebooks and workflows
- `Dashboard/` — dashboard application assets
- CSV and log files — datasets used for training and evaluation

## Running the Streamlit App

### 1) Create and activate a virtual environment

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
```

### 2) Install dependencies

```bash
pip install streamlit requests pandas matplotlib
```

### 3) Run the app

```bash
streamlit run pages/Landing_page.py
```

## Backend/API Note

The Streamlit auth and dashboard pages expect a backend API at:

- `http://127.0.0.1:8000/register`
- `http://127.0.0.1:8000/login`
- `http://127.0.0.1:8000/process_log/`

## License

Add a `LICENSE` file to define usage permissions for the project.
