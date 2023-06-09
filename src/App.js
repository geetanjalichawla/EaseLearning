import React from 'react';
import { BrowserRouter as Router,Route,  Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Request from './components/Request/Request';
import About from './components/About/About';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSucess from './components/Payments/PaymentSucess';
import Subscribe from './components/Payments/Subscribe';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import DashBoard from './components/Admin/DashBoard/DashBoard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import AdminUser from './components/Admin/AdminUser/AdminUser';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';

function App() {
  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
  })
  return (
    // <div style={{width:"100vw", overflowX:"hidden"}}>
    <Router >
      <Header/>
      
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/courses' element = {<Courses/>}/>
        <Route path='/course/:id' element = {<CoursePage/>}/>

        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/forgetpassword' element = {<ForgetPassword/>}/>
        <Route path='/resetpassword/:token' element = {<ResetPassword/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/request' element = {<Request/>}/>
        <Route path='*' element = {<PageNotFound/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/paymentfail' element = {<PaymentFail/>}/>
        <Route path='/paymentsuccess' element = {<PaymentSucess/>}/>
        <Route path='/subscribe' element = {<Subscribe/>}/>


        <Route path='/profile' element = {<Profile/>}/>
        <Route path='profile/updateprofile' element = {<UpdateProfile/>}/>
        <Route path='profile/changepassword' element = {<ChangePassword/>}/>



        <Route path='admin/dashboard' element = {<DashBoard/>}/>
        <Route path='admin/courses' element = {<AdminCourses/>}/>
        <Route path='admin/users' element = {<AdminUser/>}/>
        <Route path='admin/createcourse' element = {<CreateCourse/>}/>
        
      </Routes>

      <Footer/>
    </Router>
    // </div>

  );
}

export default App;
