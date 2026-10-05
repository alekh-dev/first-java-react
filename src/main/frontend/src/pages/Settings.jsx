import { useState } from 'react'

function Settings() {
  const [name, setName] = useState('Alex Morgan')
  const [email, setEmail] = useState('alex.morgan@example.com')
  const [timezone, setTimezone] = useState('Asia/Kolkata')
  const [emailUpdates, setEmailUpdates] = useState(true)
  const [productUpdates, setProductUpdates] = useState(false)
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSaved(true)
  }

  function clearSavedMessage() {
    if (saved) setSaved(false)
  }

  return (
    <div className="w-full px-5 py-10 sm:px-8 lg:px-14 lg:py-14 xl:px-20">
      <section className="mb-8 border-b border-slate-200 pb-7">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-forest-600">Workspace preferences</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">Settings</h1>
        <p className="mt-2 text-sm text-slate-500">Manage your profile and choose how this workspace works for you.</p>
      </section>

      <form className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]" onSubmit={handleSubmit} onChange={clearSavedMessage}>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-7 flex items-start gap-4 border-b border-slate-100 pb-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-lg text-forest-600" aria-hidden="true">◎</span>
            <div>
              <h2 className="text-base font-semibold text-slate-800">Profile information</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">These details help identify you in your workspace.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              <span>Full name</span>
              <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-forest-500 focus:ring-4 focus:ring-forest-50" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              <span>Email address</span>
              <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-forest-500 focus:ring-4 focus:ring-forest-50" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
              <span>Time zone</span>
              <select className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal text-slate-800 outline-none transition focus:border-forest-500 focus:ring-4 focus:ring-forest-50" value={timezone} onChange={(event) => setTimezone(event.target.value)}>
                <option value="Asia/Kolkata">India Standard Time (UTC+05:30)</option>
                <option value="America/New_York">Eastern Time (UTC-05:00)</option>
                <option value="Europe/London">Greenwich Mean Time (UTC+00:00)</option>
                <option value="America/Los_Angeles">Pacific Time (UTC-08:00)</option>
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-4 flex items-start gap-4 border-b border-slate-100 pb-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-lg text-forest-600" aria-hidden="true">♧</span>
            <div>
              <h2 className="text-base font-semibold text-slate-800">Notifications</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">Choose which updates you would like to receive.</p>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            <label className="flex min-h-[76px] cursor-pointer items-center justify-between gap-5 py-4">
              <span>
                <strong className="block text-sm font-medium text-slate-700">Email notifications</strong>
                <small className="mt-1 block text-xs leading-5 text-slate-500">Updates about activity in your workspace.</small>
              </span>
              <input className="h-4 w-4 shrink-0 accent-forest-600" type="checkbox" checked={emailUpdates} onChange={(event) => setEmailUpdates(event.target.checked)} />
            </label>
            <label className="flex min-h-[76px] cursor-pointer items-center justify-between gap-5 py-4">
              <span>
                <strong className="block text-sm font-medium text-slate-700">Product announcements</strong>
                <small className="mt-1 block text-xs leading-5 text-slate-500">New features and product improvements.</small>
              </span>
              <input className="h-4 w-4 shrink-0 accent-forest-600" type="checkbox" checked={productUpdates} onChange={(event) => setProductUpdates(event.target.checked)} />
            </label>
          </div>
        </section>

        <div className="flex flex-col-reverse items-stretch gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-end">
          {saved && <p className="text-sm text-forest-700" role="status">Your preferences have been saved for this session.</p>}
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-forest-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest-100" type="submit">
            Save preferences <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
      <p className="mt-5 text-xs leading-5 text-slate-400">Settings are stored in this page session only. Connect a profile API to persist changes between visits.</p>
    </div>
  )
}

export default Settings
