import { useState } from "react";
import useClima from "../hooks/useClima";

function Formulario() {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios');
      return
    }
    setAlerta('');
    consultarClima(busqueda);
  };
  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={busqueda.ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select
            name="pais"
            id="pais"
            onChange={datosBusqueda}
            value={busqueda.pais}
          >
            <option value="">Selecciona un pais</option>
            <option value="US">Estados unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
}

export default Formulario;
