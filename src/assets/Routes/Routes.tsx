import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { CompanyProfile } from '../../pages/company profile'
import { Home } from '../../pages/home/index'

export const Main = ()=>{
    return (
       <Router>
           <Routes>
               <Route path='/' element={<Home title='Toto' description='Marquinhos é legal' />} />
               <Route path='/Company_profile' element={ <CompanyProfile/> }/>
           </Routes>
       </Router>
    )
}