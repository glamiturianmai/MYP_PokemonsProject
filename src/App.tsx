import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import React from 'react';
import { DatePicker } from 'antd';
import { HomePage } from './pages/HomePage/HomePage.tsx';

function App() {
  const [count, setCount] = useState(0)

  return <div>
    
    <HomePage/>
    </div>
}

export default App
