package com.example.demospringreact.controller;


import com.example.demospringreact.exception.ResourceNotFoundException;
import com.example.demospringreact.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demospringreact.repository.EmployeeRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class EmployeeController {


    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }




    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return this.employeeRepository.findAll();
    }

    //create employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {

        return employeeRepository.saveAndFlush(employee);
    }

    //find employee by id rest
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id: " + id + " does not exist."));

        return ResponseEntity.ok(employee);
    }

    //update employee rest
    @PutMapping(value = "/emloyees/{id}",
            consumes = "application/json")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee detailedEmployee){

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id: " + id + " does not exist."));

        employee.setFirstName(detailedEmployee.getFirstName());
        employee.setLastName(detailedEmployee.getLastName());
        employee.setEmail(detailedEmployee.getEmail());

        Employee updatedEmployee = employeeRepository.saveAndFlush(employee);

        return ResponseEntity.ok(updatedEmployee);

    }
}
