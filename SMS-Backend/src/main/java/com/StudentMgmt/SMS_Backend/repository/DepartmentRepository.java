package com.StudentMgmt.SMS_Backend.repository;

import com.StudentMgmt.SMS_Backend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
