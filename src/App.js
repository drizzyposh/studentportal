import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Profile from './components/Profile';
import ListOfCoursesToRegister from './components/ListOfCoursesToRegister';
import CourseRegistrationForm from './components/CourseRegistrationForm';
import FeesPayment from './components/FeesPayment';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/signup" element={<SignUp />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/profile" element={<Profile />}> </Route>
          <Route path="/listofcoursestoregister" element={<ListOfCoursesToRegister />}> </Route>
          <Route path="/courseregistrationform/:courseId" element={<CourseRegistrationForm />}> </Route>
          <Route path="/feespayment" element={<FeesPayment />}> </Route>
        </Routes>
       <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
