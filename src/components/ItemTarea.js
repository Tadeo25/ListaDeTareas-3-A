import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";


export default function ItemTarea(props) {
    return (
        <div>
            <ListGroup.Item>{props.nombreTarea}</ListGroup.Item>
        </div>
    )
}
