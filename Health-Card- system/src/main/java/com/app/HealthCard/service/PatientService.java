package com.app.HealthCard.service;

import com.app.HealthCard.Entity.Patient;
import com.app.HealthCard.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // Get all patients
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Get patient by ID
    public Optional<Patient> getPatientById(int id) {
        return patientRepository.findById(id);
    }

    // Save a new patient or update an existing one
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // Delete patient by ID
    public void deletePatient(int id) {
        patientRepository.deleteById(id);
    }
}
