import React, { useState } from 'react';
import { connect} from 'react-redux';
import { deleteEmp, editEmp } from '../redux/actions';

function TodoItem({emp,dispatch}) {
    const [editable,setEditable] = useState(false);
    const [name, setName] = useState(emp.name);

    return (
        <div>
            <div className="row mx-3 align-items-center">
                <div>#{emp.id}</div>
                <div className="col">
                    {editable? <input className="form-control" type="text" 
                        value={name}
                        onChange={
                            (e)=>setName(e.target.value)
                        }
                    />:<h5>{emp.name}</h5>}
                </div>
                <button onClick={()=>{
                    dispatch(editEmp(
                        {
                            ...emp,
                            name:name
                        }));
                    if(editable){
                        setName(emp.name);
                    }
                    setEditable(!editable);}}
                    className="btn btn-primary m-2" >{editable?"Update":"Edit"}</button>
                <button onClick={()=>dispatch(deleteEmp(emp.id))} className="btn btn-danger m-2" >Delete</button>
            </div>
        </div>
    );
}

export default connect()(TodoItem);