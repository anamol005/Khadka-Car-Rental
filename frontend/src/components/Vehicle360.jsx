import { useEffect, useRef, useState } from "react";
import { RotateCw, Maximize2, X } from "lucide-react";
import { useLang, translations } from "@/i18n";

const EXT_FRAMES = 72;
const extUrl = (n) => `/images/360/ext/${n}.webp`;
const intUrl = (n) => `/images/360/int/${n}.webp`;
const FACE = 760;

const FACES = [
  { n: 1, t: "rotateY(0deg)" },
  { n: 2, t: "rotateY(90deg)" },
  { n: 3, t: "rotateY(180deg)" },
  { n: 4, t: "rotateY(-90deg)" },
  { n: 5, t: "rotateX(90deg)" },
  { n: 6, t: "rotateX(-90deg)" },
];

const trackDrag = (onMove) => {
  const up = () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", up);
  };
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", up);
};

function InteriorGallery() {
  const [index, setIndex] = useState(1);
  const startX = useRef(null);

  const total = 5;

  const next = () => {
    setIndex((i) => (i === total ? 1 : i + 1));
  };

  const prev = () => {
    setIndex((i) => (i === 1 ? total : i - 1));
  };

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current === null) return;

    const diff = e.clientX - startX.current;

    if (diff > 50) {
      prev();
    }

    if (diff < -50) {
      next();
    }

    startX.current = null;
  };

  return (
    <div className="relative">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14] select-none cursor-grab active:cursor-grabbing"
        style={{ aspectRatio: "16/9" }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <img
          src={`/images/360/int/${index}.webp`}
          alt={`Tata Curvv EV interior view ${index}`}
          draggable={false}
          className="w-full h-full object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-black/80"
          aria-label="Previous interior image"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-black/80"
          aria-label="Next interior image"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setIndex(n)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === n ? "bg-[#D6A84B]" : "bg-white/30"
              }`}
              aria-label={`Interior image ${n}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Vehicle360() {
  const { lang } = useLang();
  const t = translations[lang].vehicle;
  const [view, setView] = useState("exterior");
  const [frame, setFrame] = useState(1);
  const [loaded, setLoaded] = useState(0);
  const [pan, setPan] = useState(0);
  const [tilt, setTilt] = useState(20);
  const [fs, setFs] = useState(false);
  const [intReady, setIntReady] = useState(0);
  const auto = useRef(true);
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const imgsRef = useRef({});

  useEffect(() => {
    let alive = true;
    let next = 1;
    const start = (n) => {
      const img = new Image();
      img.src = extUrl(n);
      imgsRef.current[n] = img;
      img.onload = img.onerror = () => {
        if (!alive) return;
        setLoaded((c) => c + 1);
        if (next <= EXT_FRAMES) start(next++);
      };
    };
    for (let i = 0; i < 8 && next <= EXT_FRAMES; i++) start(next++);
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    FACES.forEach((f) => {
      const img = new Image();
      img.src = intUrl(f.n);
      img.onload = img.onerror = () => setIntReady((c) => c + 1);
    });
  }, []);

  useEffect(() => {
    if (view !== "exterior") return;
    const cv = canvasRef.current;
    const img = imgsRef.current[frame];
    if (cv && img && img.complete && img.naturalWidth) {
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
    }
  }, [frame, view, loaded]);

  useEffect(() => {
    if (view !== "exterior") return;
    const id = setInterval(() => {
      if (auto.current && loaded >= EXT_FRAMES)
        setFrame((f) => (f % EXT_FRAMES) + 1);
    }, 80);
    return () => clearInterval(id);
  }, [view, loaded]);

  useEffect(() => {
    const onFs = () => setFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else wrapRef.current?.requestFullscreen();
  };

  const extDown = (e) => {
    auto.current = false;
    const startX = e.clientX;
    const startF = frame;
    trackDrag((ev) => {
      const steps = Math.round((ev.clientX - startX) / 6);
      setFrame(
        ((((startF - 1 - steps) % EXT_FRAMES) + EXT_FRAMES) % EXT_FRAMES) + 1,
      );
    });
  };

  const intDown = (e) => {
    const sx = e.clientX;
    const sy = e.clientY;
    const sp = pan;
    const st = tilt;
    trackDrag((ev) => {
      setPan(sp - (ev.clientX - sx) * 0.25);
      setTilt(Math.max(-55, Math.min(55, st - (ev.clientY - sy) * 0.25)));
    });
  };

  const boxCls =
    "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14] touch-none select-none cursor-grab active:cursor-grabbing";

  return (
    <div ref={wrapRef} className="v360-wrap" data-testid="vehicle-360">
      <div className="flex items-center justify-between mb-4">
        <div
          className="glass inline-flex rounded-full p-1"
          data-testid="v360-switch"
        >
          {[
            ["exterior", t.viewExterior],
            ["interior", t.viewInterior],
          ].map(([k, label]) => (
            <button
              key={k}
              data-testid={`v360-tab-${k}`}
              onClick={() => setView(k)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                view === k
                  ? "bg-[#D6A84B] text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={toggleFs}
          data-testid="v360-fullscreen-button"
          aria-label={fs ? "Exit full screen" : "Full screen"}
          className="glass w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-[#D6A84B] hover:border-[#D6A84B]/50 transition-colors"
        >
          {fs ? <X size={17} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {view === "exterior" ? (
        <div
          className={boxCls}
          style={{ aspectRatio: "16/9" }}
          onPointerDown={extDown}
          data-testid="v360-exterior"
          data-frame={frame}
        >
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            data-testid="v360-canvas"
          />

          {loaded < EXT_FRAMES && (
            <span
              className="absolute bottom-3 left-3 font-mono2 text-[11px] tracking-widest text-zinc-500 bg-black/50 rounded-full px-3 py-1"
              data-testid="v360-loading"
            >
              {Math.round((loaded / EXT_FRAMES) * 100)}%
            </span>
          )}
        </div>
      ) : (
        <InteriorGallery />
      )}

      <p
        className="mt-3 flex items-center gap-2 text-sm text-zinc-300"
        data-testid="v360-hint"
      >
        <RotateCw size={15} className="text-[#D6A84B]" />

        <span>
          {view === "exterior"
            ? t.dragHint
            : "Swipe or drag to view the interior"}
        </span>
      </p>
    </div>
  );
}
