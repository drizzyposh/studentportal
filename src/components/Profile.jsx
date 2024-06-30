import React from 'react'
import { useEffect, useState } from 'react'
import { auth, db } from './Firebase'
import {getDoc, doc} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'



const Profile = () => {
    const [userDetails, setUserDetails] = useState(null)

       //function to fetch data to display
       const fetchData = async () => {
        auth.onAuthStateChanged(async(user) => {
          console.log(user);
          //create variable docRef thsat will fetch the doc
          const docRef = doc(db, "users", user.uid)
          //get all details through get getDoc
          const docDetails = await getDoc(docRef)
          //condition to check if there is a value inside
          if(docDetails.exists() )
            setUserDetails(docDetails.data())
        })
      }
      
      useEffect(() => {
        fetchData()
      }, [])

      //Logout
      async function logout () {
        try {
            await auth.signOut()
            window.location.href = "/login";
            toast.success('logged out successfully', {
              position: "top-left",
            })
        } catch (error) {
            console.log("Error logging out:", error.message);
        }
      }
  


  return (
    
    <div className='m-auto  head-container2 bg card3' >
        {userDetails ? (
            <>
            <h1 className='fw-bold mx-auto'>My Profile</h1>
            {/* <h3 className='fs-7 '>Welcome {userDetails.firstname}</h3> */}
            <div className='mt-5'>
                <p>Firstname: {userDetails.firstname}</p>
                <p>Lastname: {userDetails.lastname}</p>
                <p>Email: {userDetails.email}</p>

                <p className='font'>Want to register courses? <Link to="/feespayment" className="signup2 fs-6 ">Complete tuition payment</Link></p>
            </div>
            <br />
            <br />
            <button className='btn btn-dark ' onClick={logout}>
                Logout
            </button>
            </>
        ) : (
            <p className='fs-5'>Loading...</p>
        )}
    </div>
  )
}

export default Profile