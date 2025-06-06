
import { useState } from "react";

const data = [
  { codigo: "SC01", tipo: "SCREEN", descripcion: "SCREEN 1% ULTRA WHITE", contado: 12.94, tarjeta: 13.46 },
  { codigo: "SC02", tipo: "SCREEN", descripcion: "SCREEN 1% PREMIUM WHITE", contado: 11.5, tarjeta: 11.96 },
  { codigo: "SC03", tipo: "SCREEN", descripcion: "SCREEN 1% SERIE 2107 COLOR 1", contado: 12.33, tarjeta: 12.82 },
  { codigo: "SC04", tipo: "SCREEN", descripcion: "SCREEN 1% SERIE 4800 COLOR 4801", contado: 16.18, tarjeta: 16.82 }
];

export default function CotizadorFirefly() {
  const [codigo, setCodigo] = useState("");
  const [formaPago, setFormaPago] = useState("contado");
  const producto = data.find((item) => item.codigo.toLowerCase() === codigo.toLowerCase());

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f5f5f0" }}>
      <div style={{ maxWidth: 500, width: "100%", padding: 24, borderRadius: 16, background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>Cotizador Firefly 🕯️</h2>

        <label>Código del producto</label>
        <input value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Ej: SC01"
               style={{ width: "100%", padding: 8, margin: "8px 0 16px", borderRadius: 8, border: "1px solid #ccc" }} />

        <label>Forma de pago</label>
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <button onClick={() => setFormaPago("contado")} style={{ flex: 1, padding: 10, borderRadius: 8, background: formaPago === "contado" ? "#333" : "#fff", color: formaPago === "contado" ? "#fff" : "#333", border: "1px solid #ccc" }}>Contado</button>
          <button onClick={() => setFormaPago("tarjeta")} style={{ flex: 1, padding: 10, borderRadius: 8, background: formaPago === "tarjeta" ? "#333" : "#fff", color: formaPago === "tarjeta" ? "#fff" : "#333", border: "1px solid #ccc" }}>Tarjeta</button>
        </div>

        {producto ? (
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 12, background: "#fafafa" }}>
            <p><strong>Tipo:</strong> {producto.tipo}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Precio ({formaPago}):</strong> ${formaPago === "contado" ? producto.contado.toFixed(2) : producto.tarjeta.toFixed(2)}</p>
          </div>
        ) : (
          codigo && <p style={{ color: "red" }}>Producto no encontrado.</p>
        )}

        <p style={{ marginTop: 24, fontSize: 12, textAlign: "center", color: "#666" }}>
          Contacto: WhatsApp 0963747453
        </p>
      </div>
    </div>
  );
}
