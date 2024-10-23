interface JobProps {
  company: string
  title?: string
  dates: string
}

export const Job = ({ title, company, dates }: JobProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-teal font-black font-serif text-xl">{company}</h3>
      {title && <p className="text-sm">{title}</p>}
      <time className="text-sm">{dates}</time>
    </div>
  )
}
