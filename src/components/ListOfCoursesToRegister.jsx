import React from 'react'
import CourseData from './CourseData'
import { Link } from 'react-router-dom'




const ListOfCoursesToRegister = () => {
    return (
        <div>
            
            {/* list of courses offered  */}
            <div class="row row-cols-1 row-cols-md-4 m-4 g-4 card1 bg2">
                <h3 className='fw-bold text mb-3 header-text'>Course Registration</h3>
                {CourseData.map((course) => {
                    return (
                        <div class="col">
                            <div class="card">
                                <div className='card-body' key={course.id}>
                                    <h5 class="card-title">{course.title}</h5>
                                    <p class="card-text">{course.text}</p>
                                    <div className='mx-auto d-grid'>

                                    {/* register button */}
                                    <Link to={`/courseregistrationform/${course.id}`} className="signup2 btn btn-dark">{course.link}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfCoursesToRegister