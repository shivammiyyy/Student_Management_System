package com.StudentMgmt.SMS_Backend.repository;

import com.StudentMgmt.SMS_Backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
