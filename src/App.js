import React from 'react';
import ParentComponent from './components/ParentComponent';
import { ClassLifecycle, FunctionalLifecycle } from './components/LifecycleCompare';
import ProfileContainer from './components/ProfileContainer';
import ClassTimer from './components/ClassTimer';
import FunctionalTimer from './components/FunctionalTimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Component Paradigms Comparison</h1>
      
      {/* Phần quản lý Props & State */}
      <section className="comparison-section">
        <h2>Props & State Management</h2>
        <ParentComponent />
      </section>

      {/* Phần so sánh Lifecycle Methods */}
      <section className="lifecycle-section">
        <h2>Lifecycle Methods Comparison</h2>
        <ClassLifecycle />
        <FunctionalLifecycle />
      </section>

      {/* Phần truyền Props qua Profile Card */}
      <section className="profile-section">
        <h2>Props Demonstration - Profile Card</h2>
        <ProfileContainer />
      </section>

      {/* Phần so sánh Timer giữa Class và Function Component */}
      <section className="timer-section">
        <h2>Timer Comparison</h2>
        <ClassTimer />
        <FunctionalTimer />
      </section>
    </div>
  );
}

export default App;