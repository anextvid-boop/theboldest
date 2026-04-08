import os
import re
import urllib.request
import urllib.parse

# Create images directory
os.makedirs('images', exist_ok=True)

with open('theboldest.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image URLs
img_urls = re.findall(r'<img[^>]*src="([^"]+)"', content)

# Also find background-image urls if any, optional
bg_urls = re.findall(r'url\((?:["\']?)(https://theboldeststudio.com/[^)"\']+)(?:["\']?)\)', content)
urls = set(img_urls + bg_urls)

processed_urls = set()

for url in urls:
    # Filter out non-http, data URLs, etc.
    if not url.startswith('http'):
        continue
    
    # Exclude unwanted matches
    if url.startswith('data:'):
        continue

    # Simplify URL
    clean_url = url.split('?')[0]
    
    if clean_url in processed_urls:
        continue
    processed_urls.add(clean_url)

    filename = os.path.basename(urllib.parse.urlparse(clean_url).path)
    
    if not filename:
        continue

    filepath = os.path.join('images', filename)
    
    if os.path.exists(filepath):
        continue

    print(f"Downloading {clean_url} to {filepath}")
    try:
        req = urllib.request.Request(clean_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response, open(filepath, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
    except Exception as e:
        print(f"Failed to download {clean_url}: {e}")
