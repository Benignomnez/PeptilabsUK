export default function CoaWatermark() {
  const rows = Array.from({ length: 6 })
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div className="absolute inset-0 flex flex-col justify-around rotate-[-28deg] scale-125">
        {rows.map((_, i) => (
          <p key={i} className="whitespace-nowrap text-center text-navy-900/25 font-bold text-xl tracking-widest">
            PEPTILABS UK · SOLO CONSULTA &nbsp;&nbsp;&nbsp; PEPTILABS UK · SOLO CONSULTA
          </p>
        ))}
      </div>
    </div>
  )
}
