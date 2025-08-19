package com.StudentMgmt.SMS_Backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "departments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   // Use Long instead of long for consistency with Student

    @Column(name = "department_name", nullable = false, unique = true)
    private String departmentName;

    @Column(name = "department_description")
    private String departmentDescription;
}
