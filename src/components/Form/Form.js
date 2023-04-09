import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productType: '',
            productQuantity: 0,
            isVisible: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;        
        this.setState({ [name]: value })     
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(prev => ({isVisible: !prev.isVisible}));
    }

    render() {
        const productJson = JSON.stringify(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                Список продуктів
                <p>
                    <label> Назва продукту 
                        <br/>
                        <input name='productName' type='text' value={this.state.productName} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label> Тип продукту 
                        <br/>
                        <input name='productType' type='text' checked={this.state.productType} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label> Кількість продукту 
                        <br/>
                        <input name='productQuantity' type='number' value={this.state.productQuantity} onChange={this.handleChange}/>
                    </label>
                </p>
                <button> Form submit </button>
                <div>{this.state.isVisible && `json: ${productJson}`}</div>
            </form>
        )
    }
}

export default Form;