import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {
    return (
        <div className="my-3">
            {
                props.empArr.map(emp => {
                    return <TodoItem key={emp.id} emp={emp}/>
                })
            }
        </div>
    );
}

function mapStateToProps(state){
    return{
        empArr:state
    }
}

export default connect(mapStateToProps) (TodoList);