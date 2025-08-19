package com.StudentMgmt.SMS_Backend.service.implementation;

import com.StudentMgmt.SMS_Backend.dto.StudentDto;
import com.StudentMgmt.SMS_Backend.entity.Department;
import com.StudentMgmt.SMS_Backend.entity.Student;
import com.StudentMgmt.SMS_Backend.exception.ResourceNotFoundException;
import com.StudentMgmt.SMS_Backend.mapper.StudentMapper;
import com.StudentMgmt.SMS_Backend.repository.DepartmentRepository;
import com.StudentMgmt.SMS_Backend.repository.StudentRepository;
import com.StudentMgmt.SMS_Backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImplementation implements StudentService {

    private final StudentRepository studentRepository;
    private final DepartmentRepository departmentRepository;

    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);

        Department department = departmentRepository.findById(studentDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Department was not found with id: " + studentDto.getDepartmentId()
                ));

        student.setDepartment(department);
        Student savedStudent = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Student was not found with given id: " + studentId
                ));

        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return studentRepository.findAll()
                .stream()
                .map(StudentMapper::mapToStudentDto)
                .collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto studentDto) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Student was not found with given id: " + studentId
                ));

        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        student.setEmail(studentDto.getEmail());

        Department department = departmentRepository.findById(studentDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Department was not found with id: " + studentDto.getDepartmentId()
                ));

        student.setDepartment(department);

        Student updatedStudent = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudent);
    }

    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Student was not found with given id: " + studentId
                ));

        studentRepository.delete(student);
    }
}
