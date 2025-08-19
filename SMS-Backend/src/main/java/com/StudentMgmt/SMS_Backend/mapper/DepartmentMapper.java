package com.StudentMgmt.SMS_Backend.mapper;

import com.StudentMgmt.SMS_Backend.dto.DepartmentDto;
import com.StudentMgmt.SMS_Backend.entity.Department;

public class DepartmentMapper {

    // Convert Entity to DTO
    public static DepartmentDto mapToDepartmentDto(Department department) {
        if (department == null) {
            return null;
        }
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // Convert DTO to Entity for CREATE operation
    public static Department mapToNewDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null) {
            return null;
        }
        Department department = new Department();
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        // ID is NOT set, DB will generate
        return department;
    }

    // Convert DTO to Entity for UPDATE operation (only if ID is present)
    public static Department mapToExistingDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null || departmentDto.getId() == null) {
            return null;
        }
        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        return department;
    }
}
