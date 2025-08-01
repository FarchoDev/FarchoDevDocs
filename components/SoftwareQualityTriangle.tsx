// components/SoftwareQualityTriangle.tsx
export default function SoftwareQualityTriangle() {
  return (
    <div className="w-full max-w-md mx-auto my-8">
      <svg viewBox="0 0 300 260" width="100%" height="auto">
        {/* Zona: REVISIÓN (izquierda) */}
        <polygon
          points="150,10 10,240 150,240"
          fill="#d0ebff"  // azul claro
          stroke="#000"
          strokeWidth="1"
        />
        {/* Zona: TRANSICIÓN (derecha) */}
        <polygon
          points="150,10 150,240 290,240"
          fill="#ffd6a5"  // naranja claro
          stroke="#000"
          strokeWidth="1"
        />
        {/* Zona: OPERACIÓN (base centro) */}
        <polygon
          points="10,240 290,240 150,125"
          fill="#d3f9d8"  // verde claro
          stroke="#000"
          strokeWidth="1"
        />

        {/* Líneas divisorias (opcional si ya se nota la separación) */}
        <line x1="150" y1="10" x2="150" y2="240" stroke="#000" strokeWidth="1" />
        <line x1="10" y1="240" x2="150" y2="125" stroke="#000" strokeWidth="1" />
        <line x1="290" y1="240" x2="150" y2="125" stroke="#000" strokeWidth="1" />

        {/* Etiquetas zonas */}
        <text x="40" y="180" fontSize="12" fontWeight="bold">REVISIÓN</text>
        <text x="200" y="180" fontSize="12" fontWeight="bold">TRANSICIÓN</text>
        <text x="125" y="130" fontSize="12" fontWeight="bold">OPERACIÓN</text>
      </svg>
    </div>
  );
}
