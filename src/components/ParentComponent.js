import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const ParentComponent = () => {
  return (
    <div className="parent-container">
      {/* Truyền props xuống Functional Component */}
      <FunctionalComponent 
        title="Functional Component" 
        initialCount={5} 
      />
      
      {/* Truyền props xuống Class Component */}
      <ClassComponent 
        title="Class Component" 
        initialCount={5} 
      />
    </div>
  );
};
export default ParentComponent;