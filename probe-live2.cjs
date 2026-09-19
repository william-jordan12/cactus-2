(async () => {
  const r = await fetch("https://cactus-2.vercel.app/", { redirect: "follow" });
  const b = await r.text();
  console.log("STATUS:", r.status, "BYTES:", b.length);
  console.log("LIVE-HAS-contactEmail::", /contactEmail/.test(b));
  console.log("LIVE-HAS-settings-phone:", /phone:\s*env\.footerPhone/.test(b));
  for (const m of ["+1 (555) PET-TAIL", "2754 Meadow Lane", "hello@happytailspetstore.com", "2754 Meadow"]) {
    console.log("HARDCODE-" + m.slice(0, 18) + ":", b.includes(m));
  }
})().catch((e) => console.log("ERR:", e.message));
