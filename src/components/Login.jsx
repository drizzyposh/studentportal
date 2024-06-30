import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth, } from './Firebase'
import { toast } from 'react-toastify'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

 
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log('Student logged in successfully')
        window.location.href = "/profile";
        toast.success('Student logged in successfully', {
          position: "top-left",
        })
      } catch (error) {
        
      }
    }

  return (
    <>
      <section className="bg">
        <Container >
          <Row>
            <Col lg="6" className='m-auto text-center   head-container '>
              <h1 className='fw-bold fs-50 mb-4 header-text'>Log In Student Portal</h1>
                
                {/* Login form */}
              <Form className='auth-form' onSubmit={handleSubmit} >
                  <FormGroup className='form-group mb-3 w-100'>
                   <input type="email" placeholder='Email Address' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                  </FormGroup>

                  <FormGroup className='form-group mb-3 w-100'>
                   <input type="password" placeholder='Password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)}/>
                  </FormGroup>

                  {/* login button */}
                  <div className='mx-auto d-grid col-14'>
                    <button type="submit" className="submit-btn auth-btn btn btn-outline-dark">Login</button>
                  </div>

                  <p className="p-4 ">New Student? <Link to="/signup" className="signup2">Sign up</Link></p>
                  <p className="p-4">Go back <Link to="/" className="signup2">Home</Link></p>
              </Form>

           
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login