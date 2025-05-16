

// import './App.css'
// import Home from './components/Home'
// import About from './components/About'
// import Service from './components/Service'
// import Blog from './components/Blog'
// import Ourcars from './components/Ourcars'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Features from './components/Features'
// import Ourteam from './components/Ourteam'
// import Layout from './components/Layouts/Layout'
// import Testimonial from './components/Layouts/Testimonial'
// import Contact from './components/Contact'
// import GetStarted from './components/Signup'
// import Login from './components/Login'
// // import Dashboard from './components/Dashboard'/
// import AdminDashboard from './components/Dashboard'
// import CrudCar from './components/CarCrud'
// import ListofHirer from './components/ListofHirer'
// import ListofRenter from './components/ListofRenter'
// import CarList from './components/Carlist'
// import BookingList from './components/Booking'
// import BrandManager from './components/BrandManager'
// import HirerDashboard from './components/HirerDashboard'
// import ViewCarHirer from './components/ViewCarHirer'
// import MakeBooking from './components/MakeBooking'
// import BookingHistory from './components/BookingHistory'
// import ChangePassword from './components/ChangePassword'

// // import Register from "./pages/Register";
// import RenterDashboard from "./components/RenterDashboard";
// import AvailableCars from "./pages/renter/AvailableCars";
// import RenterHistory from "./pages/renter/RenterHistory";
// import RenterProfile from "./pages/renter/RenterProfile";
// // import ChangePassword from "./pages/common/ChangePassword";




// // import Home from "./pages/Home";


// function App() {
 

//   return (
//     <>
//   <BrowserRouter>
//   <Routes>
// <Route path='/'element={<Layout/>}>

//     <Route path='/' element={<Home/>}></Route>
//     <Route path='/About' element={<About/>}></Route>
//     <Route path='/Service' element={<Service/>}></Route>
//     <Route path='/Blog' element={<Blog/>}></Route>
//   <Route path='/Ourcars' element={<Ourcars/>}></Route>
//   <Route path='/Features' element={<Features/>}></Route>
//   <Route path='/Ourteam' element={<Ourteam/>}></Route>
//   <Route path='/Testimonial' element={<Testimonial/>}></Route>
//   <Route path='/Contact' element={<Contact/>}></Route>
  



        
       
     

//   </Route>
//   <Route path="/Signup" element={<GetStarted/>}/>
//   <Route path="/Login" element={<Login/>}/>
//   <Route path= '/admin/dashboard' element={<AdminDashboard/>}/>
//   <Route path='/admin/crudcar' element={<CrudCar/>} />
//   <Route path= '/admin/renter' element={<ListofRenter/>} />
//   <Route path='/admin/hirer' element={<ListofHirer/>}/>
//   <Route path='/admin/carlist' element={<CarList/>}/>
//   <Route path='/admin/booking' element={<BookingList/>}/>
//   <Route path='/brand' element={<BrandManager/>}/>
//   <Route path='/hirer/booking' element={<HirerDashboard/>}/>
//   <Route path='/viewcarhirer' element={<ViewCarHirer/>}/>
//   <Route path='/makebooking' element={<MakeBooking/>}/>
//   <Route path='/bookinghistory' element={<BookingHistory/>}/>
//   <Route path='/changepassword' element={<ChangePassword/>}/>

//   <Route path="/renterdashboard" element={<RenterDashboard />} />
//         <Route path="/availablecars" element={<AvailableCars />} />
//         <Route path="/renterhistory" element={<RenterHistory />} />
//         <Route path="/renterprofile" element={<RenterProfile />} />
//         {/* <Route path="/changepassword" element={<ChangePassword />} /> */}



//   </Routes>
//   </BrowserRouter>
// </>
    
//   )
// }

// export default App

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Blog from './components/Blog';
import Ourcars from './components/Ourcars';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './components/Features';
import Ourteam from './components/Ourteam';
import Layout from './components/Layouts/Layout';
import Testimonial from './components/Layouts/Testimonial';
import Contact from './components/Contact';
import GetStarted from './components/Signup';
import Login from './components/Login';
import AdminDashboard from './components/Dashboard';
import CrudCar from './components/CarCrud';
import ListofHirer from './components/ListofHirer';
import ListofRenter from './components/ListofRenter';
import CarList from './components/Carlist';

import BookingList from './components/Booking';
import BrandManager from './components/BrandManager';
import HirerDashboard from './components/HirerDashboard';
import ViewCarHirer from './components/ViewCarHirer';
import MakeBooking from './components/MakeBooking';
import BookingHistory from './components/BookingHistory';
import ChangePassword from './components/ChangePassword';

// Importing renter pages
import RenterDashboard from './components/RenterDashboard';

import RenterBooking from './components/RenterBooking';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Ourcars" element={<Ourcars />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Ourteam" element={<Ourteam />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        <Route path="/Signup" element={<GetStarted />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/crudcar" element={<CrudCar />} />
        <Route path="/admin/renter" element={<ListofRenter />} />
        <Route path="/admin/hirer" element={<ListofHirer />} />
        <Route path="/admin/carlist" element={<CarList />} />
        <Route path="/admin/booking" element={<BookingList />} />

        
        <Route path="/brand" element={<BrandManager />} />
        <Route path="/hirer/booking" element={<HirerDashboard />} />
        <Route path="/viewcarhirer" element={<ViewCarHirer />} />
        <Route path="/makebooking" element={<MakeBooking />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />
        <Route path="/changepassword" element={<ChangePassword />} />

       
        <Route path="/renterdashboard" element={<RenterDashboard />} />
        <Route path="/renterbooking" element={<RenterBooking/>} />

        <Route path="/forgotpassword" element={<ForgotPassword />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
