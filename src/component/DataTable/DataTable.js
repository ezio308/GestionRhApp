import React, { Component } from 'react';
import { Space, Table, Tag } from 'antd';
import './DataTable.css'
const DataTable = (props) => {
   
        return (
        
            <Table pagination={{ defaultPageSize: props.max_row}}  columns = {props.columns} dataSource = {props.data} />

        );
    
}

export default DataTable;