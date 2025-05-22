import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // Khởi tạo state trong constructor
    this.state = {
      count: props.initialCount || 0,
      inputText: ''
    };
  }

  // Phương thức xử lý state
  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  handleInputChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div className="component class">
        <h2>{this.props.title}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <input 
          value={this.state.inputText} 
          onChange={this.handleInputChange} 
          placeholder="Nhập gì đó..."
        />
        <p>Bạn đã nhập: {this.state.inputText}</p>
      </div>
    );
  }
}