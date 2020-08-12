import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Form from './components/Form';
import { Slide, toast } from 'react-toastify';
import Connection from './components/Connection';

function App() {
  return (
    <div className="container app-container-form_flex">
      {/* <Form /> */}
      <Connection />
    </div>
  );
}

export default App;
