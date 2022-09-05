const EMPLOYEES_BASE_URL = 'http://localhost:8080/api/employees'
// let headers = {}

export const getEmployees = fetch(EMPLOYEES_BASE_URL).then((res) => res.json())
export const getOne = (empId) =>
  fetch(`${EMPLOYEES_BASE_URL}/${empId}`).then((res) => res.json())
export const createEmployee = (data) =>
  fetch(EMPLOYEES_BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())

export const editEmployee = (data, id) =>
  fetch(`${EMPLOYEES_BASE_URL}/${id}`, {
    method: 'PUT',

    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080/api/employees',
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
    referrer: '',
    referrerPolicy: 'no-referrer-when-downgrade',
  }).then((res) => res.json())
