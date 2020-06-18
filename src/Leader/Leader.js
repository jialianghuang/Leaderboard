import React, { Fragment } from 'react'

const Leader = (props) =>{
    return (
        <Fragment>
            <li>{props.name} {props.score} </li>
        </Fragment>
    )
      
}

export default Leader