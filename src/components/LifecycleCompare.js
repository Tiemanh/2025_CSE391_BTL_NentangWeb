import React, { useEffect } from 'react';

// Class component with lifecycle methods
export class ClassLifecycle extends React.Component {
  componentDidMount() {
    console.log('Class component mounted');
    this.timer = setInterval(() => {
      console.log('Class timer tick');
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Class component will unmount');
    clearInterval(this.timer);
  }

  render() {
    return <div className="lifecycle class">Class Lifecycle Component</div>;
  }
}

// Functional component with hooks
export const FunctionalLifecycle = () => {
  useEffect(() => {
    console.log('Functional component mounted');
    const timer = setInterval(() => {
      console.log('Functional timer tick');
    }, 1000);

    return () => {
      console.log('Functional component will unmount');
      clearInterval(timer);
    };
  }, []);

  return <div className="lifecycle functional">Functional Lifecycle Component</div>;
};