import requests

TOKEN = "ccb9b21bf13881e4bd1e448cb85d7028"
resp = requests.get(
    "https://api.vimeo.com/me/videos",
    headers={"Authorization": f"Bearer {TOKEN}"}
)
for v in resp.json()['data']:
    print(v['uri'], v['name'])
