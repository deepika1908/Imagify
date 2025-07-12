import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px38 
    min-h-screen bg-gradient-to-b frm-teal-50 orange-50'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      
    </div>
  )
}

export default App 