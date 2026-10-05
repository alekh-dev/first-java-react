function Footer() {
  return (
    <footer className="flex min-h-16 w-full items-center justify-between gap-4 border-t border-slate-200 bg-white px-5 py-4 text-xs text-slate-500 sm:px-8 lg:px-14 xl:px-20">
      <span>© {new Date().getFullYear()} FullstackApp</span>
      <span className="hidden sm:inline">A workspace for focused work</span>
    </footer>
  )
}

export default Footer
