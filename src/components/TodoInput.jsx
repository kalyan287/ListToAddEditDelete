import React from 'react';
import { connect} from 'react-redux';
import {addEmp} from '../redux/actions'

function TodoInput(props) {
    function handleonClick(){
        let Name=document.getElementById("empName").value
        document.getElementById("empName").value = ""
        props.dispatch(addEmp(Name))
    }

    return (
        <div >
            <div className="row m-5">
                <input className="col form-control"type="text" autoComplete="off" id="empName" placeholder="Enter Employee name"/>
                <button className="btn btn-primary mx-2" onClick={handleonClick}>Add</button>
            </div>
       </div>
    );
}

export default connect()(TodoInput);