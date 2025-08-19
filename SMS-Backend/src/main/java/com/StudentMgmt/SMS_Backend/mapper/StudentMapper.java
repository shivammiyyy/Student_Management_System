package com.StudentMgmt.SMS_Backend.mapper;

import com.StudentMgmt.SMS_Backend.dto.StudentDto;
import com.StudentMgmt.SMS_Backend.entity.Student;

public class StudentMapper {

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

    public static Student mapToStudent(StudentDto studentDto) {
        if (studentDto == null) {
            return null;
        }

        Student student = new Student();
        student.setId(studentDto.getId());
        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        student.setEmail(studentDto.getEmail());
        // Department is set in the service layer
        return student;
    }
}
