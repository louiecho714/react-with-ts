import React from 'react';
import ToDoWizard from './component/ToDoWizard';
import './App.css';
import {BackTop} from 'antd'

function App() {
  return (
    <>
      <ToDoWizard/>
      <BackTop>
        <div style={{
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 4,
          backgroundColor: '#1088e9',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}>
          UP
        </div>
      </BackTop>
    </>
  );
}

export default App;
