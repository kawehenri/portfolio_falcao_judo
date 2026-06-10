interface FilterTabsProps {
  options: { label: string; value: string }[]
  active: string
  onChange: (value: string) => void
}

export function FilterTabs({ options, active, onChange }: FilterTabsProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filtrar resultados"
    >
      {options.map((option) => (
        <button
          key={option.value}
          role="tab"
          aria-selected={active === option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-judo-purple ${
            active === option.value
              ? 'bg-judo-brown text-judo-white'
              : 'bg-judo-graphite text-judo-muted hover:text-judo-brown-light'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
