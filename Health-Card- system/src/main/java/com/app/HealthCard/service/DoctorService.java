package com.app.HealthCard.service;

import com.app.HealthCard.Entity.Doctor;
import com.app.HealthCard.Repository.AdminRepository;
import com.app.HealthCard.Repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private AdminRepository adminRepository;

    // Get all doctors
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    // Get doctor by ID
    public Optional<Doctor> getDoctorById(int id) {
        return doctorRepository.findById(id);
    }

    // Save a doctor (create or update)
    public Doctor saveDoctor(Doctor doctor) {
    	System.out.println("listings"+ doctor);
        if (adminRepository.existsById(doctor.getAdmin().getAdminId())) {
            return doctorRepository.save(doctor);
        } else {
            throw new RuntimeException("Admin not found");
        }
    }

    // Delete a doctor
    public void deleteDoctor(int id) {
        doctorRepository.deleteById(id);
    }
    
    public Optional<Doctor> authenticateDoctor(String email, String password) {
      
        return doctorRepository.findByEmailAndPassword(email, password);
    }

	
    
}
