import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Feather, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

const featureItems = [
  {
    title: 'Instant professional drafts',
    description: 'Generate polished emails for any moment with expert-level tone and clarity.',
    icon: <Feather className="h-5 w-5" />,
  },
  {
    title: 'Smart tone controls',
    description: 'Shift between formal, friendly, persuasive or follow-up writing styles instantly.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Fast modern workflow',
    description: 'A premium SaaS interface with speed, smooth transitions, and responsive design.',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: 'Perfect for outreach',
    description: 'Craft emails for sales, follow-up, apology, or internal messaging in moments.',
    icon: <Users className="h-5 w-5" />,
  },
];

const steps = [
  'Describe the goal and recipient.',
  'Select tone, length and language.',
  'Generate, copy, or download your email.',
];

function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
      <header className="relative z-10 flex items-center justify-between py-6">
        <div className="text-slate-100">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300/80">AI Mail Generator</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Professional email automation for modern teams.</h1>
        </div>
        <Link to="/generator" className="inline-flex items-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
          Launch App
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </header>

      <main className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-200 shadow-inner shadow-violet-500/10">
              <Sparkles className="h-4 w-4" />
              Premium AI email crafting
            </div>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Build exceptional emails in seconds with <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">smart AI prompts</span>.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Convert your ideas into crisp, human-sounding emails. Ideal for outreach, follow-ups, apologies, and reminders with a premium, polished experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featureItems.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </motion.section>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-glow">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent blur-3xl" />
          <div className="relative space-y-6">
            <div className="rounded-[2rem] bg-slate-950/90 p-6 shadow-xl shadow-slate-950/50">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300/70">Live demo</p>
              <div className="mt-6 space-y-4 text-slate-200">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <p className="text-sm text-violet-200">To: Product team</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">Hi team, I wanted to share the latest product update and gather feedback before next week’s launch.</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <p className="text-sm text-violet-200">Tone: Friendly</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">Preview your email with crisp phrasing and subtle warmth.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Accuracy</p>
                <p className="mt-3 text-2xl font-semibold text-white">98%</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Fast output</p>
                <p className="mt-3 text-2xl font-semibold text-white">Instant</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <section className="mt-20 grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-card rounded-[2rem] border border-white/10 p-10 shadow-glow">
          <h3 className="text-3xl font-semibold text-white">How it works</h3>
          <div className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-800 bg-slate-950/85 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">{index + 1}</span>
                <p className="mt-4 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass-card rounded-[2rem] border border-white/10 p-10 shadow-glow">
          <h3 className="text-3xl font-semibold text-white">Benefits</h3>
          <ul className="mt-8 space-y-4 text-slate-300">
            <li>• Consistent quality across business and creative emails.</li>
            <li>• Save time with one-click generation and editing.</li>
            <li>• Maintain a polished, brand-safe tone every time.</li>
            <li>• A refined experience that feels launch-ready.</li>
          </ul>
        </motion.div>
      </section>

      <footer className="mt-20 border-t border-slate-800/60 pt-10 text-sm text-slate-500">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>AI Mail Generator — built for seamless email creation.</p>
          <Link to="/generator" className="text-violet-300 transition hover:text-violet-200">Try the generator</Link>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
