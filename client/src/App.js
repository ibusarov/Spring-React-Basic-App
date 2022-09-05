import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ListEmployees from './components/ListEmployees'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import { EmployeeContext } from './components/context/employeeContext'
import * as employeeService from './Services/EmployeeServices'

function App() {
  const [employees, setEmployees] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    employeeService.getEmployees.then((data) => setEmployees(data))
  }, [])

  const employeeCreateHandler = (employee) => {
    setEmployees((oldEmployees) => [...oldEmployees, employee])
    navigate('/employees')
  }
  const employeeUpdateHandler = (employeeData, employeeId) => {
    setEmployees((state) =>
      state.map((x) => (x.id === employeeId ? employeeData : x))
    )
    navigate('/employees')
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<ListEmployees employees={employees} />} />
          <Route
            path='/employees'
            element={<ListEmployees employees={employees} />}
          />
          <Route
            path='/add-employee'
            element={
              <CreateEmployee addEmployeeHandler={employeeCreateHandler} />
            }
          />

          <Route
            path='/edit-employee/:employeeId'
            element={
              <UpdateEmployee updateEmployeeHandler={employeeUpdateHandler} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
