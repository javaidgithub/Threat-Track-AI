# Threat-Track-AI

Threat-Track-AI is a cybersecurity-focused project for log analysis, anomaly detection, and AI-assisted threat investigation.
This repository includes Streamlit UI pages, ML/LLM notebooks, and datasets used across different project stages.

## What is in this repository

- `pages/`
  - `Landing_page.py`: product overview and navigation.
  - `SignUp.py`: user registration UI (calls backend auth API).
  - `LogIn.py`: login UI (calls backend auth API).
  - `Dashboard.py`: log input + CSV analysis dashboard.
- `Stage_1/`, `Stage-2/`, `Stage_3/`, `AI_Agent/`
  - Notebooks for preprocessing, anomaly detection, and LLM/agent experimentation.
- CSV datasets and project artifacts used for model development and evaluation.

## Project flow (high level)

1. Collect or upload web/server log data.
2. Preprocess logs into model-friendly text/feature formats.
3. Detect anomalies (e.g., Isolation Forest based workflows in notebooks).
4. Use AI/agent workflows for analysis support and interpretation.
5. Visualize findings in the Streamlit dashboard.

## Running the Streamlit app (frontend pages)

### 1) Create and activate virtual environment

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
```

### 2) Install dependencies

At minimum, install:

```bash
pip install streamlit requests pandas matplotlib
```

### 3) Run Streamlit

```bash
streamlit run pages/Landing_page.py
```

## Backend/API note

The Streamlit auth and dashboard pages expect a backend at:

- `http://127.0.0.1:8000/register`
- `http://127.0.0.1:8000/login`
- `http://127.0.0.1:8000/process_log/`

If your backend is in another repository or branch, start it first and keep the API URLs consistent with the Streamlit pages.

## Notebook workflow

- Use `Stage_1` for initial anomaly-detection experiments.
- Use `Stage-2` / `Stage_3` for preprocessing, embedding, and fine-tuning progression.
- Use `AI_Agent` for agent-oriented experiments (RAG/task notebooks).

## Suggested improvements

- Add a root `requirements.txt` for reproducible setup.
- Add clear dataset schema documentation (column meanings and label definitions).
- Separate large datasets/artifacts into releases or data storage to keep clone size smaller.

## License

Add a license file (`LICENSE`) to define usage permissions.
