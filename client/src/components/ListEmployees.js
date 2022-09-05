import { useNavigate } from 'react-router-dom'

// 'https://swapi.dev/api/people'

const ListEmployees = ({ employees }) => {
  const navigate = useNavigate()

  const navigateEmployee = () => {
    navigate('/add-employee')
  }

  const deleteEmployee = (id) => {}

  return (
    <div>
      <br />
      <h2 className='text-center'>Employees List</h2>
      <div>
        <button className='btn btn-primary' onClick={navigateEmployee}>
          Add Employee
        </button>
      </div>
      <br />
      <br />
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    onClick={() => navigate(`/edit-employee/${employee.id}`)}
                    className='btn btn-info'
                    style={{ marginLeft: '50px' }}
                  >
                    Update
                  </button>
                  <button
                    onClick={deleteEmployee}
                    className='btn btn-danger'
                    style={{ marginLeft: '80px' }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListEmployees
