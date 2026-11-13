import { useEffect, useMemo, useState } from "react";
import { books, categories, type Book } from "./books";

const BITS =
  "mov ax, bx  SELECT * FROM  if(agent){act()}  0xFF  <html>  min z = 3x+2y  while(true)  PEAS  int main()  JOIN  pixel[i][j]  ".repeat(
    40
  );

function accentStyle(b: Book): React.CSSProperties {
  return {
    ["--accent" as string]: `oklch(0.62 0.15 ${b.hue})`,
    ["--accent-deep" as string]: `oklch(0.45 0.13 ${b.hue})`,
    ["--accent-soft" as string]: `oklch(0.95 0.035 ${b.hue})`,
  };
}

function TopBar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex h-16 items-center gap-3.5 px-5 backdrop-blur-xl"
      style={{
        background: "color-mix(in oklch, var(--paper) 82%, transparent)",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <div
        className="absolute bottom-[-1px] left-0 h-[3px] rounded-r-[3px]"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,oklch(0.6 0.12 185),oklch(0.55 0.17 275),oklch(0.68 0.15 60),oklch(0.6 0.18 10))",
        }}
      />
      <a href="#top" className="group flex items-center gap-2.5 font-disp text-[17px] font-extrabold tracking-tight no-underline">
        <i
          className="grid size-[30px] -rotate-6 place-items-center rounded-[10px] font-mono text-xs not-italic transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          SB
        </i>
        Study Books
      </a>
      <nav className="ml-auto flex gap-1 overflow-x-auto [scrollbar-width:none]">
        {[
          ["#library", "Library"],
          ["#features", "Features"],
          ["#how", "How it works"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="whitespace-nowrap rounded-2xl px-3 py-2 text-[13.5px] font-bold no-underline transition-colors hover:bg-[var(--paper2)]"
            style={{ color: "var(--ink2)" }}
          >
            {label}
          </a>
        ))}
      </nav>
      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        className="h-[38px] min-w-[38px] cursor-pointer rounded-[13px] border-0 px-2.5 text-sm font-bold transition-transform active:translate-y-0.5"
        style={{ background: "var(--card)", color: "var(--ink)", boxShadow: "0 3px 0 var(--line)" }}
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

function Hero() {
  const stats = [
    { n: String(books.length), l: "Study books" },
    { n: "2", l: "Languages (AR + EN)" },
    { n: "0", l: "Logins or installs" },
    { n: "1", l: "Place for everything" },
  ];
  const words = ["All", "your", "study"];
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-[70px] pt-[120px]"
      style={{ background: "#17151C", color: "#F6F1E8" }}
    >
      <div
        className="bits pointer-events-none absolute -inset-5 break-all font-mono text-[13px] font-medium leading-loose"
        style={{ color: "rgba(246,241,232,.07)" }}
        aria-hidden
      >
        {BITS}
      </div>
      {/* floating blobs */}
      <div
        className="pointer-events-none absolute -right-24 top-24 size-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "oklch(0.6 0.17 275)" }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 size-[360px] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.68 0.15 60)" }}
      />

      <div className="relative mx-auto w-full max-w-[1080px]">
        <span
          className="blink-dot inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[11.5px] font-semibold tracking-[.14em]"
          style={{ borderColor: "rgba(246,241,232,.22)", color: "rgba(246,241,232,.75)" }}
        >
          INTERACTIVE · BILINGUAL · NO LOGIN
        </span>

        <h1 className="mb-0 mt-6 font-disp text-[clamp(52px,9.5vw,132px)] font-extrabold leading-[.88] tracking-[-.055em]">
          {words.map((w, i) => (
            <span key={w} className="rise mr-[.22em]" style={{ animationDelay: `${i * 0.08}s` }}>
              {w}
            </span>
          ))}
          <br />
          <span className="rise" style={{ animationDelay: ".3s" }}>
            books,{" "}
          </span>
          <em
            className="rise font-serif font-normal italic tracking-[-.02em]"
            style={{ color: "oklch(0.82 0.14 80)", animationDelay: ".4s" }}
          >
            one place.
          </em>
        </h1>

        <div className="mt-9 grid max-w-[980px] gap-7 md:grid-cols-2">
          <p className="m-0 text-[17px]" style={{ color: "rgba(246,241,232,.72)" }}>
            Ten interactive study books — AI, Assembly, Databases, OS, Robotics and more — with quizzes, worked
            problems and model answers. Pick a subject and start.
          </p>
          <p dir="rtl" className="m-0 text-[17.5px]" style={{ color: "rgba(246,241,232,.72)" }}>
            كل كتب المذاكرة في مكان واحد 📚 اختار المادة، وذاكر بالعربي المصري والإنجليزي، وحل أسئلة ونماذج إجابة — من غير
            ما تدوّر على ملفات.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#library"
            className="rounded-2xl px-6 py-3.5 font-disp text-base font-bold no-underline transition-transform duration-300 hover:-translate-y-1"
            style={{ background: "oklch(0.82 0.14 80)", color: "#17151C", boxShadow: "0 5px 0 oklch(0.6 0.12 75)" }}
          >
            Browse the library →
          </a>
          <a
            href="#features"
            className="rounded-2xl border px-6 py-3.5 font-disp text-base font-bold no-underline transition-colors hover:bg-white/10"
            style={{ borderColor: "rgba(246,241,232,.25)", color: "#F6F1E8" }}
          >
            What's inside
          </a>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {stats.map((s) => (
            <div
              key={s.l}
              className="min-w-[130px] rounded-[20px] border px-[18px] py-3.5"
              style={{ background: "rgba(246,241,232,.06)", borderColor: "rgba(246,241,232,.1)" }}
            >
              <b className="block font-disp text-[30px] leading-none tracking-[-.03em]">{s.n}</b>
              <span className="text-[12.5px] font-semibold" style={{ color: "rgba(246,241,232,.6)" }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* quick subject chips */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {books.map((b, i) => (
            <a
              key={b.id}
              href={b.file}
              className="group relative flex min-h-[96px] flex-col justify-between overflow-hidden rounded-[20px] p-3.5 text-white no-underline transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0"
              style={{
                background: `oklch(0.6 0.15 ${b.hue})`,
                transform: `rotate(${i % 2 ? 1 : -1.2}deg)`,
                boxShadow: "0 0 0 transparent",
              }}
            >
              <b className="font-disp text-[28px] leading-[.9] tracking-[-.04em]">{b.short}</b>
              <span className="text-[13px] font-bold leading-tight">{b.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ b, i }: { b: Book; i: number }) {
  return (
    <a
      href={b.file}
      className="book-card pop group relative flex flex-col overflow-hidden rounded-[26px] p-6 no-underline"
      style={{
        ...accentStyle(b),
        color: "var(--ink)",
        transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)`,
        animationDelay: `${Math.min(i, 8) * 0.05}s`,
      }}
    >
      <div
        className="absolute -right-10 -top-10 size-36 rounded-full opacity-90"
        style={{ background: "var(--accent-soft)" }}
      />
      <div className="relative flex items-start justify-between">
        <div
          className="grid size-14 -rotate-6 place-items-center rounded-2xl text-[28px] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          style={{ background: "var(--accent)" }}
        >
          {b.emoji}
        </div>
        <span className="font-mono text-xs font-bold tracking-widest" style={{ color: "var(--accent-deep)" }}>
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mb-1 mt-5 font-disp text-[26px] font-extrabold leading-[1.05] tracking-[-.035em]">
        {b.title}
      </h3>
      <p className="relative m-0 font-mono text-[11.5px] font-bold uppercase tracking-wider" style={{ color: "var(--accent-deep)" }}>
        {b.scope}
      </p>

      <p className="relative mb-3 mt-3.5 text-[14.5px] leading-relaxed" style={{ color: "var(--ink2)" }}>
        {b.desc}
      </p>
      <p dir="rtl" className="relative m-0 text-[14px]" style={{ color: "var(--mute)" }}>
        {b.ar}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {b.topics.map((t) => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 text-[11.5px] font-bold"
            style={{ background: "var(--accent-soft)", color: "var(--accent-deep)" }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-center justify-between pt-6">
        <span className="font-disp text-[15px] font-bold">Open book</span>
        <span
          className="arrow grid size-10 place-items-center rounded-full text-lg font-bold"
          style={{ background: "var(--accent-soft)", color: "var(--accent-deep)" }}
        >
          →
        </span>
      </div>
    </a>
  );
}

function Library() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return books.filter((b) => {
      if (cat !== "All" && b.category !== cat) return false;
      if (!s) return true;
      return [b.title, b.short, b.scope, b.desc, b.ar, ...b.topics].join(" ").toLowerCase().includes(s);
    });
  }, [q, cat]);

  return (
    <section id="library" className="mx-auto max-w-[1180px] px-6 py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="m-0 font-mono text-xs font-bold tracking-[.18em]" style={{ color: "var(--mute)" }}>
            THE LIBRARY
          </p>
          <h2 className="mb-0 mt-2 font-disp text-[clamp(38px,6vw,72px)] font-extrabold leading-[.92] tracking-[-.05em]">
            Pick a <em className="font-serif font-normal italic tracking-[-.02em]" style={{ color: "oklch(0.62 0.15 60)" }}>subject.</em>
          </h2>
        </div>
        <label className="relative block w-full sm:w-[320px]">
          <span className="sr-only">Search books</span>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base">🔎</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: OS, SQL, PEAS, HTTP…"
            className="w-full rounded-2xl border py-3.5 pl-11 pr-4 text-[15px] font-semibold outline-none transition-shadow focus:shadow-[0_0_0_4px_color-mix(in_oklch,oklch(0.62_0.15_275)_25%,transparent)]"
            style={{ background: "var(--card)", borderColor: "var(--line)", color: "var(--ink)" }}
          />
        </label>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === cat;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="cursor-pointer rounded-2xl border px-4 py-2 text-[13.5px] font-bold transition-all hover:-translate-y-0.5"
              style={{
                background: on ? "var(--ink)" : "var(--card)",
                color: on ? "var(--paper)" : "var(--ink2)",
                borderColor: on ? "var(--ink)" : "var(--line)",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      {list.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <BookCard key={b.id + cat + q} b={b} i={books.indexOf(b)} />
          ))}
        </div>
      ) : (
        <div
          className="rounded-[26px] border border-dashed p-16 text-center"
          style={{ borderColor: "var(--line)", color: "var(--mute)" }}
        >
          <div className="text-4xl">🫥</div>
          <p className="mt-3 font-disp text-xl font-bold">No book matches “{q}”</p>
          <button
            onClick={() => {
              setQ("");
              setCat("All");
            }}
            className="mt-2 cursor-pointer rounded-xl border-0 px-4 py-2 font-bold"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}

function Features() {
  const items = [
    { e: "✅", h: "Quizzes with instant feedback", p: "MCQ, true/false and complete-the-answer questions — check yourself as you read.", hue: 150 },
    { e: "🗣️", h: "Arabic + English", p: "Explanations in Egyptian colloquial Arabic, key terms in English — exactly like the exam.", hue: 60 },
    { e: "🌙", h: "Dark mode & text size", p: "Every book has its own reading tools: dark mode, bigger text and focus mode.", hue: 275 },
    { e: "📝", h: "Essays & model answers", p: "Written-question practice with full model answers, worked problems and labs.", hue: 10 },
    { e: "⚡", h: "Single-file books", p: "Each book is one HTML file. No login, no install, no backend — just open and study.", hue: 185 },
    { e: "📱", h: "Works on any device", p: "Phone, tablet or laptop. Perfect for last-minute revision on the bus.", hue: 305 },
  ];
  return (
    <section id="features" style={{ background: "var(--paper2)" }}>
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <p className="m-0 font-mono text-xs font-bold tracking-[.18em]" style={{ color: "var(--mute)" }}>
          WHAT'S INSIDE
        </p>
        <h2 className="mb-12 mt-2 font-disp text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[.95] tracking-[-.05em]">
          Built to make you{" "}
          <em className="font-serif font-normal italic tracking-[-.02em]" style={{ color: "oklch(0.6 0.18 10)" }}>
            actually
          </em>{" "}
          pass.
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div
              key={f.h}
              className="rounded-[26px] border p-6 transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background: "var(--card)",
                borderColor: "var(--line)",
                transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)`,
              }}
            >
              <div
                className="grid size-12 place-items-center rounded-2xl text-2xl"
                style={{ background: `oklch(0.94 0.05 ${f.hue})` }}
              >
                {f.e}
              </div>
              <h3 className="mb-2 mt-4 font-disp text-xl font-extrabold tracking-tight">{f.h}</h3>
              <p className="m-0 text-[15px]" style={{ color: "var(--ink2)" }}>
                {f.p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: "1", h: "Pick a subject", p: "Choose from the library — or search for a topic." },
    { n: "2", h: "Read & practice", p: "Go chapter by chapter, answer the quizzes inline." },
    { n: "3", h: "Revise & ace it", p: "Use essays and model answers for the final push." },
  ];
  return (
    <section id="how" className="mx-auto max-w-[1180px] px-6 py-24">
      <h2 className="mb-12 mt-0 font-disp text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[.95] tracking-[-.05em]">
        Three steps. <em className="font-serif font-normal italic tracking-[-.02em]" style={{ color: "oklch(0.55 0.17 275)" }}>No setup.</em>
      </h2>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-[26px] p-7 text-white"
            style={{ background: `oklch(${0.58 - i * 0.02} 0.15 ${[185, 275, 60][i]})` }}
          >
            <b className="font-disp text-[88px] leading-[.8] tracking-[-.05em] opacity-90">{s.n}</b>
            <h3 className="mb-1.5 mt-4 font-disp text-2xl font-extrabold tracking-tight">{s.h}</h3>
            <p className="m-0 text-[15px] opacity-90">{s.p}</p>
          </div>
        ))}
      </div>

      <div
        className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-[32px] p-8 sm:p-10"
        style={{ background: "#17151C", color: "#F6F1E8" }}
      >
        <div>
          <h3 className="m-0 font-disp text-[clamp(26px,4vw,40px)] font-extrabold leading-tight tracking-tight">
            Ready? Start with the exam that's <em className="font-serif font-normal italic" style={{ color: "oklch(0.82 0.14 80)" }}>closest.</em>
          </h3>
          <p dir="rtl" className="mb-0 mt-2 text-base" style={{ color: "rgba(246,241,232,.65)" }}>
            ابدأ بالمادة اللي امتحانها أقرب، وبالتوفيق 💪
          </p>
        </div>
        <a
          href="#library"
          className="rounded-2xl px-6 py-3.5 font-disp text-base font-bold no-underline transition-transform duration-300 hover:-translate-y-1"
          style={{ background: "oklch(0.82 0.14 80)", color: "#17151C", boxShadow: "0 5px 0 oklch(0.6 0.12 75)" }}
        >
          Back to library ↑
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t px-6 py-10 text-center text-sm" style={{ borderColor: "var(--line)", color: "var(--mute)" }}>
      <p className="m-0 font-disp text-base font-extrabold" style={{ color: "var(--ink)" }}>
        Study Books
      </p>
      <p className="mb-0 mt-1">Made for students, by a student · Good luck in your exams 🍀</p>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("sb-dark") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    try {
      localStorage.setItem("sb-dark", dark ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [dark]);

  return (
    <>
      <TopBar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Library />
        <Features />
        <How />
      </main>
      <Footer />
    </>
  );
}
