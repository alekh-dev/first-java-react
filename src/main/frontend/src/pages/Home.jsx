import { Link } from 'react-router-dom'

const features = [
  {
    number: '01',
    title: 'See the big picture',
    description: 'A clear view of project activity, progress, and the updates that matter.',
    icon: '▤',
  },
  {
    number: '02',
    title: 'Keep work moving',
    description: 'Spot what needs attention and decide what your team should do next.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Make it yours',
    description: 'Set up your profile and choose the notifications you want to receive.',
    icon: '◎',
  },
]

function Home() {
  return (
    <div className="w-full">
      <section className="relative isolate grid min-h-[560px] w-full grid-cols-1 items-center gap-12 overflow-hidden bg-[radial-gradient(ellipse_at_80%_8%,rgba(89,151,115,0.28),transparent_36%),linear-gradient(120deg,#152235_0%,#1b3042_57%,#1d3b3c_100%)] px-5 py-16 text-white sm:px-8 lg:min-h-[580px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-14 lg:py-20 xl:px-20">
        <div className="pointer-events-none absolute -right-28 -top-36 -z-10 h-[430px] w-[430px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-72 right-[24%] -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.07]" />
        <div className="relative z-10">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-mint">Your workspace, in focus</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
            A clearer view of your work starts here.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A considered workspace for keeping projects, team activity, and your everyday preferences in one place.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-mint px-5 text-sm font-bold text-forest-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-emerald-200" to="/dashboard">
              Open dashboard <span aria-hidden="true" className="text-lg">→</span>
            </Link>
            <Link className="text-sm font-semibold text-emerald-100 transition hover:text-white" to="/settings">
              Personalize your workspace <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs text-slate-300">
            <span><strong className="mr-2 text-mint">01</strong> One workspace</span>
            <span><strong className="mr-2 text-mint">02</strong> Clear priorities</span>
            <span><strong className="mr-2 text-mint">03</strong> Better focus</span>
          </div>
        </div>

        <div className="relative z-10 w-full rounded-2xl border border-white/70 bg-white p-6 text-slate-800 shadow-lift sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest-600">Workspace guide</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">Start with what matters</h2>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-xl text-forest-600" aria-hidden="true">✦</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Each part of your workspace has a clear purpose, so you can move from overview to action.</p>
          <div className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
            {[
              ['01', 'Home', 'Your starting point', '/'],
              ['02', 'Dashboard', 'Activity and progress', '/dashboard'],
              ['03', 'Settings', 'Profile and preferences', '/settings'],
            ].map(([number, title, description, href]) => (
              <Link className="group grid min-h-[68px] grid-cols-[42px_1fr_auto] items-center gap-3 transition hover:bg-forest-50/60" to={href} key={title}>
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 text-[10px] font-bold text-slate-400 group-hover:bg-white group-hover:text-forest-600">{number}</span>
                <span>
                  <strong className="block text-sm font-semibold text-slate-700">{title}</strong>
                  <span className="mt-1 block text-xs text-slate-500">{description}</span>
                </span>
                <span className="pr-2 text-slate-300 transition group-hover:translate-x-1 group-hover:text-forest-600" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400">A simple place to bring your team’s work together.</p>
        </div>
      </section>

      <section className="w-full px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20" aria-labelledby="workspace-features">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-600">Built for clarity</p>
            <h2 id="workspace-features" className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">Everything has its place</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">Move from overview to details without losing your focus. Your workspace is designed to feel straightforward from the start.</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article className="group min-h-52 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-forest-100 hover:shadow-soft lg:p-8" key={feature.number}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-forest-600">{feature.number}</span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-50 text-lg text-forest-600 transition group-hover:bg-forest-600 group-hover:text-white" aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="mt-8 text-base font-semibold text-slate-800">{feature.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
