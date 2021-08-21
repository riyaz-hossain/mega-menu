import React from "react";
import { Link } from "react-router-dom";
import "./BalanceReqList";

const BalanceReqList = () => {
    return(
        <>
        <div className="d-flex justify-content-evenly">
          <Link className="req-list" style={{color:`#000`,textDecoration:`none`,padding:`5px`}} to="/admin" >admin</Link>
          <Link className="req-list" style={{color:`#000`,textDecoration:`none`,padding:`5px`}} to="/agent" >agent</Link>
          <Link className="req-list" style={{color:`#000`,textDecoration:`none`,padding:`5px`}} to="/customer" >customer</Link>
          <Link className="req-list" style={{color:`#000`,textDecoration:`none`,padding:`5px`}} to="/seller" >seller</Link>
          <Link className="req-list" style={{color:`#000`,textDecoration:`none`,padding:`5px`}} to="/deliver" >deliver</Link>
        </div>
        </>
    )
}
export default BalanceReqList;