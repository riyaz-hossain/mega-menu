import React from 'react';
import "./Balance.css";

const AdminSbreq = () => {
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
                        <th>total accept cash in from agent
                        </th>
                        <th>total accept cash in from customer
                        </th>
                        <th>Total send money to agent
                        </th>
                        <th>total send money to customer
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
                        <th colspan="2">action
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
                                <button className="action-reject" >reject</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSbreq;