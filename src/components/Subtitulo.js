import React from 'react';

export default function Subtitulo(props) {
  return (
    <>
    <h3 className="text-center diplay-4 text-dark">
        Tareas de la comision {props.comision}
    </h3>
    </>
  );
}
