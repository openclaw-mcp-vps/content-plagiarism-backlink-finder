export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Content Protection + SEO
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find Who Copied Your Content<br />
          <span className="text-[#58a6ff]">and Turn Them Into Backlinks</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          CopyShield scans the web for stolen content using text fingerprinting, generates ready-to-send DMCA takedown notices, and helps you request attribution links from copiers — all tracked in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Protecting Your Content — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Content Scanning", desc: "Fingerprints your articles and crawls the web to find exact and near-duplicate copies." },
          { icon: "📄", title: "DMCA Templates", desc: "One-click DMCA takedown notices pre-filled with infringing URLs and your content details." },
          { icon: "🔗", title: "Backlink Tracker", desc: "Track attribution requests sent to copiers and monitor when they add your link." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your content</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Scan up to 50 URLs/month",
              "Unlimited DMCA templates",
              "Backlink request tracking",
              "Email alerts for new copies",
              "Dashboard with copy history",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does CopyShield detect copied content?",
              a: "We use text fingerprinting to create unique signatures of your content, then query search APIs and crawl the web to find pages with matching or near-duplicate text."
            },
            {
              q: "Can I really get backlinks from people who copied me?",
              a: "Yes. Many site owners will add an attribution link when politely asked — especially when they know you have a DMCA notice ready. CopyShield tracks every outreach so you never lose a potential link."
            },
            {
              q: "What if I want to cancel?",
              a: "You can cancel anytime from your billing portal. No questions asked, no lock-in contracts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} CopyShield. All rights reserved.
      </footer>
    </main>
  );
}
