import io
import os
import urllib.request

import numpy as np
from PIL import Image

BASE = "/app/frontend/public/images/360"
os.makedirs(f"{BASE}/ext", exist_ok=True)
os.makedirs(f"{BASE}/int", exist_ok=True)

HDR = {"User-Agent": "Mozilla/5.0"}
TARGET = np.array([11, 15, 20], dtype=np.float32)  # #0B0F14
GRAY = np.array([0x6F, 0x6F, 0x6F], dtype=np.float32)


def fetch(url):
    req = urllib.request.Request(url, headers=HDR)
    return urllib.request.urlopen(req, timeout=30).read()


def recolor(im):
    a = np.asarray(im.convert("RGB")).astype(np.float32)
    spread = a.max(axis=2) - a.min(axis=2)
    lum = a.mean(axis=2)
    neutral = spread < 70
    mask = neutral & (lum > 145)
    a[mask] = TARGET
    soft = neutral & (lum > 105) & (lum <= 145)
    if soft.any():
        w = ((150 - lum[soft]) / 45.0)[:, None]
        a[soft] = TARGET * w + a[soft] * (1 - w)
    return Image.fromarray(a.astype(np.uint8))


for n in range(1, 73):
    p = f"{BASE}/ext/{n}.webp"
    if os.path.exists(p):
        continue
    data = fetch(f"https://imgd.aeplcdn.com/1280x720/cw/360/tata/1837/17829/closed-door/6f6f6f/{n}.jpg?q=80&v=20250218051043")
    Image.open(io.BytesIO(data)).convert("RGB").save(p, "WEBP", quality=85, method=6)
    if n % 12 == 0:
        print("ext", n, flush=True)

for n in range(1, 7):
    p = f"{BASE}/int/{n}.webp"
    data = fetch(f"https://imgd.aeplcdn.com/1875x1875/cw/360/tata/1837/interior/d/{n}.jpg?v=20250409053051&ao=1&q=75")
    im = Image.open(io.BytesIO(data)).convert("RGB").resize((1024, 1024), Image.LANCZOS)
    im.save(p, "WEBP", quality=82, method=6)
    print("int", n, flush=True)

print("DONE")
