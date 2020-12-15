import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function TextInput(props) {
    return (
        <div>
            <form onSubmit={props.inputSubmitted}>
            <input value={props.inputValue} onChange={props.inputChanged} name={props.id}/><br/>
            <button type='submit'>Submit</button>
            </form>
            <p>{props.messages}</p>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        inputValue: state.inputValue,
        messages: state.messages.map(a => <p>{a.text}</p>),
        id : state.id
    }

}

function mapDispatchToProps(dispatch) {
    return{
        inputChanged:(e) => {
            console.log('changed', e.target.value);
            const action = {type: 'INPUT_CHANGE', text : e.target.value};
            dispatch(action);
        },
        inputSubmitted:(e) => {
            e.preventDefault();
            console.log('submitted', e.target[0].value);
            const submitAction = {type: 'INPUT_SUBMIT', messages: { id : uuidv4(), text : e.target[0].value}};
            dispatch(submitAction);
            function deleteMessage(id) {
                return ({ type: 'INPUT_REMOVED', messages: { id: submitAction.messages.id } });
            }
            setTimeout(function(){
                dispatch(deleteMessage(submitAction.messages.id))
            },5000)
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
