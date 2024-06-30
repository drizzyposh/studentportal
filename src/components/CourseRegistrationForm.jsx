import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from './Firebase'
import {setDoc, doc} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CourseData from './CourseData'



const CourseRegistrationForm = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [password, setPassword] = useState("")
  const [studentID, setStdentID] = useState(0)

  const navigate = useNavigate();


  const {courseId} = useParams()
  const regCourse = CourseData.find(regCourse => regCourse.id.toString() === courseId)

  if(!regCourse) {
    return <div className='fw-bold'> Course not found </div>
  }





  const courseRegSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password )
      const user = auth.currentUser
      console.log(user);
      if(user) {
        await setDoc(doc(db, "users", user.uid), {
          firstname: fname,
          lastname: lname,
          email: user.email,
          course: course,
          studentID: studentID
        })
      }
      console.log('Registration Complete');
      toast.success('Registration Complete', {
        position: "top-left",
      })
      navigate('/')
    } catch (error) {
        console.log('failed');
        toast.error('Registration failed', {
          position: "top-left",
        })
    }
  }


  return (
    <div>
      <form class="row g-3 head-container3 bg3" onSubmit={courseRegSubmit}>
        <h2 className='fw-bold fs-50 mb-3 header-text text '>Register for {regCourse.title}</h2>
        <div class="col-md-6">
          <label for="inputFirstname" class="form-label">First Name</label>
          <input type="text" name='firstname' class="form-control" placeholder='Enter Firstname' onChange={(e) => setFname(e.target.value)} />
        </div>
        <div class="col-md-6">
          <label for="inputLastname" class="form-label">Last Name</label>
          <input type="text" name='lastname' class="form-control" placeholder='Enter Lastname' onChange={(e) => setLname(e.target.value)}/>
        </div>
        <div class="col-6">
          <label for="inputEmail" class="form-label">Email Address (required) </label>
          <input type="email" name='email' class="form-control" placeholder="@.com" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="col-6">
          <label for="inputEmail" class="form-label">Password </label>
          <input type="password" name='password' class="form-control" placeholder="123" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="col-md-6">
          <label for="inputCourse" class="form-label">Course</label>
          <input type="text" class="form-control" onChange={(e) => setCourse(e.target.value)}/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Department</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option> Electrical Engineering</option>
            <option> Public Health</option>
            <option> Chemical Engineering</option>
            <option> Business Administration</option>
            <option> Mechanical Engineering</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputID" class="form-label">Student ID</label>
          <input name="number" type="text" class="form-control"  onChange={(e) => setStdentID(e.target.value)}/>
        </div>
        <div class="col-14 mx-auto d-grid">
          <button className="signup2 btn btn-outline-dark">Register</button> 
          <br />
          {/* <Link to="/feespayment" className="signup2 "> Click here to make payments </Link> */}
        </div>
      </form>

    </div>
  )
}

export default CourseRegistrationForm



