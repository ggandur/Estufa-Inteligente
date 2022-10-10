import { useState } from 'react'
import './App.css'
import axios from "axios"
import HomePage from "./components/homePage"

function App() {

  return (
    <HomePage 
    luminosityValue={"49%"}
    humidityValue={"58%"}
    />
  )
}

export default App
