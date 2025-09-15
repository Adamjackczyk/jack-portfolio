"use client";

export default function CopyEmailButton({ email }: { email: string }) {
  const label = "Copy email";

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      const btn = document.getElementById("copy-email-btn");
      if (btn) {
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = original || "Copy email"), 1200);
      }
    } catch {
      // no-op; on some browsers clipboard may require user gesture
    }
  }

  return (
    <button
      id="copy-email-btn"
      onClick={copy}
      className="px-4 py-2 rounded-2xl border border-white/30 hover:border-white/60"
      type="button"
      title={label}
    >
      {label}
    </button>
  );
}
