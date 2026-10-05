const metrics = [
  { label: 'Active projects', value: '08', note: 'Across your workspace', icon: '▦', iconClass: 'bg-forest-50 text-forest-600' },
  { label: 'Tasks in progress', value: '12', note: 'Keep your momentum', icon: '◷', iconClass: 'bg-sky-50 text-sky-700' },
  { label: 'Completed this week', value: '24', note: 'A week well spent', icon: '✓', iconClass: 'bg-emerald-50 text-emerald-700' },
]

const activity = [
  { initials: 'JD', name: 'Jordan Davis', action: 'updated the project brief', project: 'Website refresh', time: '12 min ago', tone: 'bg-forest-50 text-forest-700' },
  { initials: 'AM', name: 'Alex Morgan', action: 'completed a task in', project: 'Mobile app', time: '48 min ago', tone: 'bg-amber-50 text-amber-700' },
  { initials: 'SK', name: 'Sam Kim', action: 'shared a new update in', project: 'Design system', time: '2 hours ago', tone: 'bg-sky-50 text-sky-700' },
  { initials: 'You', name: 'You', action: 'created a new project', project: 'Product roadmap', time: 'Yesterday', tone: 'bg-emerald-50 text-emerald-700' },
]

function Dashboard() {
  return (
    <div className="w-full px-5 py-10 sm:px-8 lg:px-14 lg:py-14 xl:px-20">
      <section className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-600">Workspace overview</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">Your dashboard</h1>
          <p className="mt-2 text-sm text-slate-500">A snapshot of what is happening across your workspace.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
          <span className="text-forest-600" aria-hidden="true">◷</span>
          {new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(new Date())}
        </span>
      </section>

      <section className="mb-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3" aria-label="Workspace summary">
        {metrics.map((metric) => (
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft sm:p-6" key={metric.label}>
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-slate-500">{metric.label}</p>
              <span className={`grid h-10 w-10 place-items-center rounded-xl text-lg ${metric.iconClass}`} aria-hidden="true">{metric.icon}</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <strong className="text-4xl font-semibold tracking-tight text-slate-800">{metric.value}</strong>
              <span className="text-xs text-slate-400">{metric.note}</span>
            </div>
          </article>
        ))}
      </section>

      <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.8fr)]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-600">Latest updates</p>
              <h2 className="text-lg font-semibold tracking-tight text-slate-800">Recent activity</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-500">4 updates</span>
          </div>
          <div className="divide-y divide-slate-100 px-5 sm:px-7">
            {activity.map((item) => (
              <article className="flex min-h-[82px] items-center gap-4 py-4" key={`${item.name}-${item.project}`}>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[11px] font-bold ${item.tone}`}>{item.initials}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-6 text-slate-500"><strong className="font-semibold text-slate-700">{item.name}</strong> {item.action} <strong className="font-semibold text-slate-700">{item.project}</strong></p>
                  <span className="mt-1 block text-xs text-slate-400">{item.time}</span>
                </div>
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <aside className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-600">This week</p>
                <h2 className="text-lg font-semibold tracking-tight text-slate-800">Steady progress</h2>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-50 text-lg text-forest-600" aria-hidden="true">↗</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">Your team has completed 24 of 32 planned tasks.</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Weekly task completion" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span className="block h-full w-3/4 rounded-full bg-gradient-to-r from-forest-600 to-emerald-400" />
            </div>
            <div className="mt-3 flex items-center gap-2"><strong className="text-sm text-forest-700">75%</strong><span className="text-xs text-slate-400">weekly goal</span></div>
          </section>

          <section className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-forest-50/70 p-5 sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-lg text-forest-600 shadow-sm" aria-hidden="true">⌘</span>
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-600">System</p>
              <h2 className="text-sm font-semibold text-slate-800">Java API</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">Connection status appears in the page header.</p>
            </div>
          </section>
        </aside>
      </div>
      <p className="mt-5 text-xs leading-5 text-slate-400">Example workspace data is shown for demonstration. Connect your project data source to display live updates.</p>
    </div>
  )
}

export default Dashboard
