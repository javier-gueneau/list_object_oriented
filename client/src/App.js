import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import Register_screen from './screens/Register_screen';
import Login_screen from './screens/Login_screen';
import Dashboard_screen from './screens/Dashboard_screen';
import New_component from './components_object_orient/new_component';


function App() {
  
  const[title,setTitle]=useState('')
  const [username,setUsername]=useState('')
  
  const [password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  const[email,setEmail]=useState('')
  const[error,setError]=useState('no hay error ahora')
  
  return (
    <div className="App">

         
        <New_component some_text={'this is definitive'} />
        <New_component some_text={'this component has OTHER text'} />
        <New_component some_text='texto sin llaves :)' />
          
      </div>
  );
}

export default App;
