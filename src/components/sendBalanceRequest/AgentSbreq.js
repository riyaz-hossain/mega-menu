import React from 'react';
import { useState } from 'react';
import "./Balance.css";

    
    const AgentSbreq = () => {
        const [block, setBlock] = useState("block");
    const handlechnge = () => {
        alert("are you sure?");
        setBlock("blocked")
    }
    return (
            <div className="admin-balance-req">
                <div className="table-responsive table-bordered ">
                    <table className="table  table-striped table-bordered">
                        <thead className="text-center" style={{ backgroundColor: `green`, color: `#fff` }} >
                            <th>Sl</th>
                            <th>Sender Type</th>
                            <th>Sender phone</th>
                            <th>Sender Name</th>
                            <th>total add balance from the admin</th>
                            <th>total receive balance from customer
                            </th>
                            <th>total receive profit from customer withdraw
                            </th>
                            <th>Total send money to customer
                            </th>
                            <th>total send money profit receive
                            </th>
                            <th>new balance
                            </th>
                            <th>send amount
                            </th>
                            <th>receiver type
                            </th>
                            <th>receiver phone
                            </th>
                            <th>receiver name
                            </th>
                            <th>receiver cash balance
                            </th>
                            <th>receiver new balance
                            </th>
                            <th>date time
                            </th>
                            <th colspan="3">action
                            </th>
                        </thead>
                        <tbody className="text-left">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{ padding: `0px` }}>
                                    <button className="action-accept">accept
                                    </button>
                                </td>
                                <td style={{ padding: `0px` }}>
                                    <button className="action-reject" >reject</button>
                                </td>
                                <td style={{ padding: `0px` }}>
                                    <button onClick={handlechnge} className="action-block">{block}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    export default AgentSbreq;