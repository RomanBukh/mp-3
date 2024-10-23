import { useReducer } from "react"
import styled from "styled-components";

const initialState = {
    firstNumber: 0,
    secondNumber: 0, 
    res: null
}

const StyledDiv = styled.div`
    margin: 0% 50% 0%;
    padding: 5%;
    border: double;
    border-color: red;
`

function reducer(state, action) {
    switch(action.type){
        case 'UPDATE_FIRST':
            return {
                ...state,
                firstNumber: parseFloat(action.payload)
            }
        case 'UPDATE_SECOND':
            return{
                ...state,
                secondNumber: parseFloat(action.payload)
            }
        case 'ADDITION':
            return{
                ...state,
                res: state.firstNumber + state.secondNumber
            }
        case 'SUBTRACTION':
            return{
                ...state,
                res: state.firstNumber - state.secondNumber
            }
        case 'MULTIPLY':
            return{
                ...state,
                res: state.firstNumber * state.secondNumber
            }
        case 'DIVISION':
            return{
                ...state,
                res: state.firstNumber / state.secondNumber
            }
        case 'POWER':
            return{
                ...state,
                res: state.firstNumber ^ state.secondNumber
            }
        case 'CLEAR':
            return{
                ...state,
                res: '',
                firstNumber: '',
                secondNumber: ''
            }
        default: 
            return(
                state
            )
    }
}

export default function Calculator(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StyledDiv>
            <label>Enter a number: </label>
            <input
                id="first"
                type="number"
                value={state.firstNumber}
                onChange={(e) => dispatch({type: 'UPDATE_FIRST', payload: e.target.value})}
            />

            <label>Enter another number: </label>
            <input
                id="second"
                type="number"
                value={state.secondNumber}
                onChange={(e) => dispatch({type: 'UPDATE_SECOND', payload: e.target.value})}
            />

            <button onClick={() => dispatch({type: 'ADDITION'})}>+</button>

            <button onClick={() => dispatch({type: 'SUBTRACTION'})}>-</button>

            <button onClick={() => dispatch({type: 'MULTIPLY'})}>*</button>

            <button onClick={() => dispatch({type: 'DIVISION'})}>/</button>

            <button onClick={() => dispatch({type: 'POWER'})}>^</button>

            <button onClick={() => dispatch({type: 'CLEAR'})}>CLR</button>

            <h2 style={{color: state.res < 0 ? 'red' : 'black'}}>Result: {state.res}</h2>
            
        </StyledDiv>
    )
}