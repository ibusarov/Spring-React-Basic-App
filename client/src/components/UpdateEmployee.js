import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as employeeService from '../Services/EmployeeServices'

const UpdateEmployee = ({ updateEmployeeHandler }) => {
  const navigate = useNavigate()

  const { employeeId } = useParams()

  const [currentEmployee, setCurrentEmployee] = useState({})

  useEffect(() => {
    employeeService
      .getOne(employeeId)
      .then((employeeData) => {
        setCurrentEmployee(employeeData)
      })
      .catch((error) => console.log(error))
  }, [])

  const cancel = () => {
    navigate('/employees')
  }

  const updateEmployee = (e) => {
    e.preventDefault()

    employeeService
      .editEmployee(currentEmployee, employeeId)
      .then((result) => updateEmployeeHandler(result))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h3 className='text-center'>Edit Employee</h3>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  placeholder='First Name'
                  name='firstName'
                  className='form-control'
                  defaultValue={currentEmployee.firstName}
                />
                <label>LastName:</label>
                <input
                  placeholder='Last Name'
                  name='lastName'
                  className='form-control'
                  defaultValue={currentEmployee.lastName}
                />
                <label>Email:</label>
                <input
                  placeholder='Email'
                  name='email'
                  className='form-control'
                  defaultValue={currentEmployee.email}
                />
              </div>
              <button
                className='btn btn-success'
                onClick={updateEmployee}
                type='submit'
              >
                Update
              </button>
              <button
                className='btn btn-danger'
                onClick={cancel}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee
