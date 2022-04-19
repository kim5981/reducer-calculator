
import React, { useReducer } from 'react';
import reducer, { initialState } from "../reducers";
import { applyNumber } from "../actions";

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
  
  const [ state, dispatch ] = useReducer( reducer, initialState );

  const handleClick = (number) => {
    dispatch(applyNumber(number))
  }



  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> React Calculator </a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={ state.total }/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> { state.operation }</span>
              <span id="memory"><b>Memory:</b> { state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton 
                value={1} 
                onClick={ () => handleClick(1) }
              />
              <CalcButton
                value={2}
                onClick={ () => "" }
              />
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
