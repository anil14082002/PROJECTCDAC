package com.app.HealthCard.Repository;

import com.app.HealthCard.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    Optional<Patient> findByContactNumber(String contactNumber);
    Optional<Patient> findByEmail(String email);
}
