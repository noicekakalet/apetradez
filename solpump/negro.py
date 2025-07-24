from playwright.sync_api import sync_playwright
import json

URL = "https://backend.solpump.com/api/v1/affiliate?sort=Most+Wagered"
TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ3YWxsZXRBZGRyZXNzIjoiRzc5dlBuWFhyVk1mdHl6VHI1ajg4UWdyMVRZTDNhM3ZwdnNUaDNtTU1Sak4iLCJ1c2VyIjoiOWRmMzk0YWEtZDY4MC00OWZhLWJiZmMtMzFlZTE0MmY1MzJhIiwic3RhdGUiOiJMT0dHRURfSU4ifQ.-EnRlKjBvV3axk1lPobjwMF6vjrtFj0UW75-Ak2_0tY"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    
    # Przejdź na główną stronę, by przebrnąć Cloudflare JS
    page.goto("https://backend.solpump.com", wait_until="domcontentloaded")

    # Gdy Cloudflare challenge minie, użyj kontekstowego requesta
    headers = {
        "Authorization": f"Bearer {TOKEN}",
        "Accept": "application/json"
    }
    response = context.request.get(URL, headers=headers)

    if response.ok:
        data = response.json()
        print(json.dumps(data, indent=2))
    else:
        print(f"❌ Błąd HTTP {response.status}: {response.text()}")

    browser.close()
