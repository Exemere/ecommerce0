import requests
import os

SANITY_PROJECT_ID = os.getenv("SANITY_PROJECT_ID")
SANITY_DATASET = os.getenv("SANITY_DATASET", "production")
SANITY_API_VERSION = "v2023-06-01"
SANITY_URL = f"https://{SANITY_PROJECT_ID}.api.sanity.io/{SANITY_API_VERSION}/data/query/{SANITY_DATASET}"

def sanity_fetch(query: str):
    response = requests.get(SANITY_URL, params={"query": query})
    return response.json().get("result", [])
