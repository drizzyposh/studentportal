import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from './Firebase'
import {setDoc, doc} from 'firebase/firestore'


const SignUp = () => {
    // const [formData, setFormData] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          const user = auth.currentUser;
          console.log(user);
          if(user) {
            await setDoc(doc(db, "users", user.uid), {
              firstname: firstName,
              lastname: lastName,
              email: user.email,
            })
          }
          console.log('Student registered successfully');
          toast.success('Student registered successfully', {
            position: "top-left",
          })
        } catch (error) {
          toast.error('Registration failed', {
            position: "top-left",
          })
        }
    }


  return (
    <>
      <section className="bg">
        <Container>
          <Row>
            <Col lg="6" className='m-auto text-center head-container'>
              <h3 className='fw-bold fs-50 mb-3 header-text'>Create Your Account Today</h3>
      
              <Form className='auth-form' onSubmit={handleSubmit}>
                <FormGroup className='form-group mb-3 w-100'>
                <input type="text" placeholder='Firstname'  className='form-control' onChange={(e) => setFirstName( e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="text" placeholder='Lastname' className='form-control' onChange={(e) => setLastName(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="email" placeholder='Email Address'  className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="password" placeholder='Password' className='form-control'onChange={(e) => setPassword( e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="password" placeholder='Confirm Password'  className='form-control' onChange={(e) => setConfirmPassword( e.target.value)}/>
                </FormGroup>

                
                <div className=' mx-auto d-grid'>
                  <button type="submit" className="submit-btn auth-btn btn btn-outline-dark">Sign up </button>
                </div>
      
                <p className="p-4">If you have an account, please <Link to="/login" className="signup2">Log in</Link></p>
                <p className="p-4">Go back <Link to="/" className="signup2">Home</Link></p>
              </Form>
            
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SignUp