import { NAV_ITEMS } from './layout/navigation'

/**
 * Shared placeholder for pages that belong to other parts of the app.
 * It renders a clean empty state — no features, no fake data.
 */
export default function PagePlaceholder({ path }) {
  const page = NAV_ITEMS.find((item) => item.to === path)
  const label = page?.label ?? 'Page'
  const description = page?.description ?? ''
  const Icon = page?.icon

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col items-center justify-center px-4 py-10 text-center sm:py-14">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
          {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
        </span>
        <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
          {label}
        </h2>
        <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Coming soon
        </p>
      </div>
    </section>
  )
}
