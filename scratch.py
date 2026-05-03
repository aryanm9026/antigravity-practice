import urllib.request
import re

url = "https://unsplash.com/photos/person-doing-handcrafts-TywjkDHf0Ps"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    m = re.search(r'property="og:image"\s+content="([^"]+)"', html)
    if m:
        print(m.group(1))
    else:
        print("og:image not found")
except Exception as e:
    print("Error:", e)
