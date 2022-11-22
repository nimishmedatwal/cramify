
import React from 'react'
import "./thapar.css"
import {Link } from "react-router-dom";
export default function Cardbranch(props) {
  return (
    <div>
        
            <div className="card">
            <Link to={props.link} params={{}}>
                <div className="content">
                    {props.branches}
                </div>
            </Link>
            </div>
    </div>
  )
}
