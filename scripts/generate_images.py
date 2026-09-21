import asyncio
import os
import base64
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
OUT = Path("/app/frontend/public/images")
OUT.mkdir(parents=True, exist_ok=True)

STYLE = (
    "ultra premium automotive advertising photography, dark moody studio, deep black and charcoal "
    "background, dramatic electric cyan-blue rim lighting, soft spotlight from above, subtle glossy "
    "floor reflection, cinematic color grade, 8k hyper-detailed, absolutely no license plate, no "
    "number plate, blank smooth bumper, no text, no watermark, no logos"
)

JOBS = [
    (
        "hero-car.png",
        "Cinematic front three-quarter hero shot of a futuristic Indian electric SUV coupe with a sleek "
        "sloping coupe roofline and flush door handles, dark gunmetal grey paint, sharp full-width LED "
        "light bar glowing ice blue, low aggressive stance on large aero wheels. " + STYLE,
    ),
    (
        "car-side.png",
        "Elegant side profile of a futuristic electric SUV coupe with sloping fastback roofline, dark "
        "graphite paint, glowing cyan accent line along the body, parked in a dark studio with a thin "
        "strip of blue light on the floor. " + STYLE,
    ),
    (
        "car-interior.png",
        "Luxurious minimalist electric vehicle interior at night, panoramic curved dual digital displays "
        "glowing soft blue, black premium leather seats with subtle blue ambient lighting along the "
        "dashboard and doors, panoramic glass roof showing night sky. " + STYLE,
    ),
    (
        "nepal-road.png",
        "A futuristic dark grey electric SUV coupe driving on a winding Himalayan mountain highway in "
        "Nepal at dusk, snow capped peaks in the distance, colorful prayer flags on a roadside pole, "
        "dramatic clouds, headlights on, cinematic wide shot. " + STYLE,
    ),
]


async def generate(name, prompt):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = LlmChat(api_key=api_key, session_id=f"img-{name}", system_message="You generate premium automotive images.")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=prompt))
    if images:
        data = base64.b64decode(images[0]["data"])
        (OUT / name).write_bytes(data)
        print(f"OK {name} {len(data)//1024}KB")
    else:
        print(f"FAIL {name}: {text[:120] if text else 'no output'}")


async def main():
    for name, prompt in JOBS:
        try:
            await generate(name, prompt)
        except Exception as e:
            print(f"ERROR {name}: {e}")

asyncio.run(main())
