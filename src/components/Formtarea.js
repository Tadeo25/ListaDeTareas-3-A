import React, {useState, useEffect} from "react";
import Lista from './Lista';

export default function Formtarea() {
//Aqui escribo codigo js
let TareasLS = JSON.parse(localStorage.getItem('listaTareas'));
//vamos a crear dos state
const [tarea,setTarea] = useState('');
const [listaTareas,setListaTareas] = useState([])

//uso de ciclo de vida de un componente
//uso useEffect solo en el montaje
useEffect(() => {
    //aqui va la logica a ejecutar
    console.log('ejecutando ciclo de vida de un componente')
    if(TareasLS){
        console.log('aqui quiero actualizar localStorage')
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas))
    }else{
        console.log('él localStorage no existe')
        localStorage.setItem('listaTareas', JSON.stringify([]))
    }
}, [])

// const guardarTarea = (e) => {
//     console.log(e.target.value);
//     setTarea(e.target.value);
// }

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(('desde la funcion handleSubmit'))
    // Agregar la tarea en el state listaTareas
    setListaTareas([...listaTareas,tarea]);
    // Limpiar el valor del state tarea
    setTarea('');

}

    return (
//Aqui escribo codigo js
        <div className="container p-2 my-5 d-flex flex-column">
            <form className="w-75 d-flex " onSubmit={handleSubmit}>
                <div className="d-flex mt-3">
                    <input
                        type="text"
                        placeholder="Ingrese una tarea"
                        className="form-control"
                        onChange={(e) => setTarea(e.target.value)}
                        value={tarea}
                    />
                    <button className="btn btn-warning ml-2">
                        <b>Agregar</b>
                    </button>
                </div>
            </form>
            <article className="my-5">
            <Lista listaTareas={listaTareas}/>
            </article>
        </div>
    );
}
