interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="fluid-gradient py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
