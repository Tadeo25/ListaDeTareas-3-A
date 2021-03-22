import React, {useState} from "react";

export default function Formtarea() {
//Aqui escribo codigo js
const [tarea,setTarea] = useState('');
const [listaTareas,setListaTareas] = useState([])

// const guardarTarea = (e) => {
//     console.log(e.target.value);
//     setTarea(e.target.value);
// }
    return (
//Aqui escribo codigo js
        <div className="container my-5 d-flex justify-content-center">
            <form className="w-75">
                <div className="d-flex mt-3">
                    <input
                        type="text"
                        placeholder="Ingrese una tarea"
                        className="form-control"
                        onChange={(e) => setTarea(e.target.value)}
                    />
                    <button className="btn btn-warning ml-2">
                        <b>Agregar</b>
                    </button>
                </div>
            </form>
        </div>
    );
}
