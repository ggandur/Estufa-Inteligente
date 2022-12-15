import { useState, Fragment } from 'react'
import './App.css'
import HomePage from "./components/homePage"
import DataType from './interfaces/dataType'
import LandingPage from './components/landingPage'

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
        <LandingPage setData={setData}/>
      </Fragment>
  )
}

export default App
