import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { CompanyProfile } from '../../pages/company profile'
import { Home } from '../../pages/home/index'
import {Missions_Activate} from '../../pages/missions_activate/index'

export const Main = ()=>{
    return (
       <Router>
           <Routes>
               <Route path='/' element={<Home title='Toto' description='Marquinhos é legal' />} />
               <Route path='/Company_profile' element={ <CompanyProfile/> }/>
               <Route path='/mission_company' element={ <Missions_Activate/> }/>
           </Routes>
       </Router>
    )
}