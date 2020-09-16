import React, {Fragment, useState, useEffect} from 'react';
import {
   Link,
} from 'react-router-dom';
import './List.css';

export function List() {
    
    //States
    const [list, setList] =  useState({});

    //Fetch data when component loads
    useEffect(() => {
        fetch(`/api/list.php`)
        .then(response => response.text())
        .then(data => setList(JSON.parse(data)));
    }, []);

    console.log(list);

    return (
        <Fragment>
            <div>
                <Link to="/"> 
                    List 
                </Link>
                <Link to="/create"> 
                    Create 
                </Link>
                <Link to="/update"> 
                    Update 
                </Link>
            </div>
            <div>
                <table>
                    <tbody>
                        {list.data && list.data.headers.map((header) => {
                            return (
                                <tr>
                                    <th>{header.id.title}</th>
                                    <th>{header.name.title}</th>
                                    <th>{header.created_at.title}</th>
                                    <th>{header.message.title}</th>
                                </tr>
                            );
                        })}
                        {list.data && list.data.rows.map((tableData) => {
                            return (
                                <tr>
                                    <td>{tableData.id}</td>
                                    <td>{tableData.name}</td>
                                    <td>{tableData.created_at}</td>
                                    <td>{tableData.message}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}