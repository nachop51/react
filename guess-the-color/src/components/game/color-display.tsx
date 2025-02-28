interface ColorDisplayProps {
  title: string
  color?: string
}

export default function ColorDisplay({ title, color }: ColorDisplayProps) {
  return (
    <article className="flex flex-col items-center gap-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      <div
        className={`h-64 w-64 rounded-lg shadow-lg grid place-items-center border-2 border-dashed transition-all duration-300 ${
          color?.length === 7 ? 'border-transparent' : 'border-gray-300'
        }`}
        style={{ backgroundColor: color }}
      ></div>
    </article>
  )
}
