import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

export default function Lista(props) {
return (
    <>
        <ListGroup>
            {
                props.listaTareas.map((dato, indice)=> <ItemTarea nombreTarea={dato}></ItemTarea>)
            }
            
        </ListGroup>
    </>
);
}
