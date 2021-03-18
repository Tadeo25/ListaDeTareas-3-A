import React from "react";

export default function Titulo(props) {
    return (
        <>
            <h1 className="text-center display-2 text-dark">
                Lista de Tareas {props.emoji}
            </h1>
        </>
    );
}
