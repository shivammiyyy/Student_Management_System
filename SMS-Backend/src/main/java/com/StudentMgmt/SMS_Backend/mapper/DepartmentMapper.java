package com.StudentMgmt.SMS_Backend.mapper;

import com.StudentMgmt.SMS_Backend.dto.DepartmentDto;
import com.StudentMgmt.SMS_Backend.entity.Department;

public class DepartmentMapper {

    // Convert Entity -> DTO
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

    // Convert DTO -> Entity for CREATE (no id set, DB will auto-generate)
    public static Department mapToNewDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null) {
            return null;
        }

        Department department = new Department();
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        return department;
    }

    // Convert DTO -> Entity for UPDATE (id must be provided)
    public static Department mapToExistingDepartment(DepartmentDto departmentDto) {
        if (departmentDto == null || departmentDto.getId() == null) {
            return null; // caller should handle null properly
        }

        Department department = new Department();
        department.setId(departmentDto.getId());
        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDescription(departmentDto.getDepartmentDescription());
        return department;
    }
}
