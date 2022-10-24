import { useState } from 'react'
import './App.css'
import HomePage from "./components/homePage"
import DataType from './interfaces/dataType'
import { RefreshButtonWrapper } from './components/refreshButton/refreshButton.style'
import { getData } from './components/functions/getData'

function App() {

  const [data, setData] = useState<DataType>()
  const shouldRender = !!data

  return (
    shouldRender
      ? <HomePage
        data={data}
        setData={setData}
      />
      : <><h1>Bem Vindo</h1>
        <RefreshButtonWrapper
          onClick={() => getData(setData)}
        >
          <img
            src="src/assets/refresh.png"
            alt="Refresh icon"
            height={45} />
        </RefreshButtonWrapper></>
  )
}

export default App
