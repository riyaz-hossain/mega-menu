import React from 'react';
import "../sendBalanceRequest/Balance.css";
import { Link } from 'react-router-dom';

const WithdrawrqList = () => {
    return (
        <div>
            <div className="d-flex justify-content-evenly">
                <Link className="req-list" style={{ color: `#000`, textDecoration: `none`, padding: `5px` }} to="/withdraw-agent" >agent</Link>
                <Link className="req-list" style={{ color: `#000`, textDecoration: `none`, padding: `5px` }} to="/withdraw-customer" >customer</Link>
                <Link className="req-list" style={{ color: `#000`, textDecoration: `none`, padding: `5px` }} to="/withdraw-seller" >seller</Link>
                <Link className="req-list" style={{ color: `#000`, textDecoration: `none`, padding: `5px` }} to="/withdraw-deliver" >deliver</Link>
            </div>
        </div>
    );
};

export default WithdrawrqList;