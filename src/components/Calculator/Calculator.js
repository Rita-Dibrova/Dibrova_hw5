import React from "react";
import PropTypes from 'prop-types';

function TenthsConvert(props) {
  return <p>{props.number * 0.5}</p> ;
}

function HundredthsConvert(props) {
  return <p>{props.number * 0.05}</p> ;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0
    };
    
    this.tenthsHandleChange = this.tenthsHandleChange.bind(this);
    this.hundredthsHandleChange = this.hundredthsHandleChange.bind(this);
  }

  tenthsHandleChange(e) {
    const value = parseInt(e.target.value);
    this.setState({ firstNumber: +value });
  }
  
  hundredthsHandleChange(e) {
    const value = parseInt(e.target.value);
    this.setState({ secondNumber: +value });
  }

  render() {
    const firstNumber = this.state.firstNumber;
    const secondNumber = this.state.secondNumber;
    return (            
      <div>
        <div>
          <label> Конвертація 0,5 
            <br/>
            <input type="number" value={this.state.firstNumber} onChange={this.tenthsHandleChange}/>
            <TenthsConvert number={firstNumber}/>
          </label>
        </div>
        <div>
          <label> Конвертація 0,05
            <br/>
            <input type="number" value={this.state.secondNumber} onChange={this.hundredthsHandleChange}/>
            <HundredthsConvert number={secondNumber}/>
          </label>
        </div>
      </div>
    )
  }
}

Calculator.propTypes = {
  firstNumber: PropTypes.number,
  secondNumber: PropTypes.number
}

export default Calculator;