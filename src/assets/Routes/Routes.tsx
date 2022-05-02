import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { CompanyProfile } from '../../pages/company profile'
import { Home } from '../../pages/home/index'
import { SignUp } from '../../pages/signUp'
import {Missions_Activate} from '../../pages/missions_activate/index'
import { Modal_message } from '../components/Modal_message'

export const Main = ()=>{
    return (
       <Router>
           <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Company_profile' element={ <CompanyProfile/> }/>
               <Route path='/individual-register' element={ <SignUp/> }/>
               <Route path='/mission_company' element={ <Missions_Activate/> }/>
               <Route path='/modal_messege' element={ <Modal_message/> }/>

           </Routes>
       </Router>
    )
}