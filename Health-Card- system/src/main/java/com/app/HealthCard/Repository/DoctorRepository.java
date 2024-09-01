package com.app.HealthCard.Repository;

import com.app.HealthCard.Entity.Doctor;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
	 Optional<Doctor> findByEmailAndPassword(String email, String password);
}
