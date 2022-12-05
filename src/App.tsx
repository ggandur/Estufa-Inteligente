import { useState, Fragment } from 'react'
import './App.css'
import HomePage from "./components/homePage"
import DataType from './interfaces/dataType'
import RefreshButton from './components/refreshButton'

function App() {

  const [data, setData] = useState<DataType>()
  const shouldRender = !!data

  return (
    shouldRender
      ? <HomePage
        data={data}
        setData={setData}
      />
      :
      <Fragment>
        <h1>Bem Vindo</h1>
        <RefreshButton
          setData={setData} />
      </Fragment>
  )
}

export default App
