import { useState } from 'react'
import './App.css'
import axios from "axios"
import HomePage from "./components/homePage"

const dataMock = {
  "main": {
    "temperature": "28.7",
    "luminosityValue": "49%",
    "humidityValue": "78%"
  },
}

const dataMock2 = {
  "main": {
    "temperature": "19.4",
    "luminosityValue": "79%",
    "humidityValue": "44%"
  },
}

function App() {

  return (
    <HomePage
      temperature={dataMock.main.temperature}
      luminosityValue={dataMock.main.luminosityValue}
      humidityValue={dataMock.main.humidityValue}
    />
  )
}

export default App
