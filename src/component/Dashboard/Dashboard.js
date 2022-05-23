import {useState, useEffect} from 'react';
import TogleNav from '../TogleNav/TogleNav'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import ForgetPassword from '../ForgetPassword/ForgetPassword'
import SalesRecord from '../SalesRecord/SalesRecord'
import ViewData from '../ViewData/ViewData'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import Box from '@mui/material/Box'
import Loader from '../shared/Loader'
import Modal from '@mui/material/Modal';


import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


const Dashboard = () => {
 
    const navigate = useNavigate()
    const SINGLE_COMPANY = process.env.REACT_APP_SINGLE_COMPANY;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const SINGLE_STAFF = process.env.REACT_APP_SINGLE_STAFF;

    const userId = window.localStorage.getItem('userId');
    const userToken = window.localStorage.getItem('userToken');
    const userType = window.localStorage.getItem('userType');

  
    const [state, setState] = useState({
        left: false,
    });
    const [user, setUser] = useState({
        userId,
        userToken,
        userType
    })  
    const [isLoading, setIsLoading] = useState(true)
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(()=>{
      console.log(userId)
      if(user.userId === null || user.userToken === null || user.userType === null) navigate('/login')

      if(user.userType === 'company'){

        fetch(`${BASE_URL}${SINGLE_COMPANY}?username=${user.userId}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.success === true){
              setIsLoading(false)
              setLoggedUser(data.message)
            }
          })
      }else if (user.userType === 'staff'){
        fetch(`${BASE_URL}${SINGLE_STAFF}?staffId=${user.userId}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.success === true){
              setIsLoading(false)
              setLoggedUser(data.message)
            }
          })
      }
    },[])

    return (
        <div>

             
             <Modal
              open={isLoading}
              onClose={!isLoading}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#3456d1',
                opacity: 0.95,
                alignItems: 'center',
                color: 'white'
              }}
            >
                <Loader></Loader>
          </Modal>
            
            <TogleNav setState={setState} state={state} loggedUser={loggedUser} isLoading={isLoading}/> 
            <Nav className="nav" loggedUser={loggedUser} isLoading={isLoading}/> 

            { <div className="right-con">
              <Header setState={setState} state={state} loggedUser={loggedUser} isLoading={isLoading}/>

              <Routes>
                <Route index  element={<Home />} />

                <Route path='register' element={<Registration />}/>
                <Route path='login' element={<Login /> }/>
                <Route path='forget-password' element={<ForgetPassword /> }/>
                <Route path='sales-record' element={<SalesRecord />  }/>
                <Route path='view-data' element={<ViewData />  }/>

              </Routes>
              
              <Footer />
            </div> }

          </div>
    );
}
 
export default Dashboard;