import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as employeeService from '../Services/EmployeeServices'

const CreateEmployee = ({ addEmployeeHandler }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const navigate = useNavigate()

  const cancel = () => {
    navigate('/employees')
  }

  const changeHandler = (e) => {
    setEmployee((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  const submitEmployee = (e) => {
    e.preventDefault()

   

    employeeService
      .createEmployee(employee)
      .then((data) => addEmployeeHandler(data))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h3 className='text-center'>Add Employee</h3>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  placeholder='First Name'
                  name='firstName'
                  className='form-control'
                  value={employee.firstName}
                  onChange={changeHandler}
                />
                <label>LastName:</label>
                <input
                  placeholder='Last Name'
                  name='lastName'
                  className='form-control'
                  value={employee.lastName}
                  onChange={changeHandler}
                />
                <label>Email:</label>
                <input
                  placeholder='Email'
                  name='email'
                  className='form-control'
                  value={employee.email}
                  onChange={changeHandler}
                />
              </div>
              <button
                className='btn btn-success'
                onClick={submitEmployee}
                type='submit'
              >
                Save
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

export default CreateEmployee
