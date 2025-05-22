// components/ClassTimer.js
import React from 'react';

class ClassTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prev => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>Class Timer: {this.state.seconds}s</div>;
  }
}

export default ClassTimer;