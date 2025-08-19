package com.StudentMgmt.SMS_Backend.service;

import com.StudentMgmt.SMS_Backend.dto.DepartmentDto;
import java.util.List;

public interface DepartmentService {

    // Create a new department (id is auto-generated, so DTO id should be ignored)
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    // Get department by path variable id
    DepartmentDto getDepartmentById(Long departmentId);

    // Get all departments
    List<DepartmentDto> getAllDepartments();

    // Update department by path variable id
    DepartmentDto updateDepartment(Long departmentId, DepartmentDto departmentDto);

    // Delete department by path variable id
    void deleteDepartment(Long departmentId);
}
