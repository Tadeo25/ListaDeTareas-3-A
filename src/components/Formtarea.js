import React from "react";

export default function Formtarea() {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <form className="w-75">
        <div className="d-flex mt-3">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
          />
          <button className="btn btn-outline-light">Agregar</button>
        </div>
      </form>
    </div>
  );
}
