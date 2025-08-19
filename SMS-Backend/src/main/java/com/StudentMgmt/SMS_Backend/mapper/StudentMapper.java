package com.StudentMgmt.SMS_Backend.mapper;

import com.StudentMgmt.SMS_Backend.dto.StudentDto;
import com.StudentMgmt.SMS_Backend.entity.Student;

public class StudentMapper {

    // Convert Entity -> DTO
    public static StudentDto mapToStudentDto(Student student) {
        if (student == null) {
            return null;
        }

        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getDepartment() != null ? student.getDepartment().getId() : null
        );
    }

    // Convert DTO -> Entity for CREATE (no ID set, DB will auto-generate)
    public static Student mapToNewStudent(StudentDto studentDto) {
        if (studentDto == null) {
            return null;
        }

        Student student = new Student();
        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        student.setEmail(studentDto.getEmail());
        // Department will be set in service layer if needed
        return student;
    }

    // Convert DTO -> Entity for UPDATE (ID must be present)
    public static Student mapToExistingStudent(StudentDto studentDto) {
        if (studentDto == null || studentDto.getId() == null) {
            return null; // caller should handle null
        }

        Student student = new Student();
        student.setId(studentDto.getId());
        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        student.setEmail(studentDto.getEmail());
        // Department will be set in service layer if needed
        return student;
    }
}
