import React from 'react'
import { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




const FeesPayment = () => {
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")


  const navigate = useNavigate();

  const payWithPaystack = (e) => {
    e.preventDefault()
    
    const payStack = new PaystackPop()
    payStack.newTransaction({
      key: "pk_test_be7a8579a8edf033373de18d1713730b675e4486",
      email,
      amount:amount * 100,
      firstname,
      lastname,

      onSuccess(transaction) {
        navigate('/listofcoursestoregister')
        // let displayMessage = `Payment is successful! Reference ${transaction.reference}`
        // alert(displayMessage)
      },
      onCancel() {
        alert("Transaction cancelled")
      }
    })

  }


  return (
    <div className=''>
        <section className="bg">
        <Container>
          <Row>
            <Col lg="6" className='m-auto text-center head-container'>
              <h3 className='fw-bold fs-50 mb-3 header-text'>Tuition Payment</h3>
      
              <Form className='auth-form' >
                <FormGroup className='form-group mb-3 w-100'>
                <input type="email" placeholder='Email Address'  className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="text" placeholder='Amount'  className='form-control' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="text" placeholder='First Name' className='form-control' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form-group mb-3 w-100'>
                <input type="text" placeholder='Last Name'  className='form-control' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </FormGroup>

                <div className='d-grid  col-14 mx-auto'>
                <button type="submit" className="submit-btn auth-btn btn btn-outline-dark" onClick={payWithPaystack}>Pay</button>
                </div>
              </Form>         
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default FeesPayment