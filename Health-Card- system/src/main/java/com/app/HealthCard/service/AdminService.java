package com.app.HealthCard.service;

import com.app.HealthCard.Entity.Admin;
import com.app.HealthCard.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    public Admin authenticate(String email, String password) {
//        Admin admin = adminRepository.findByEmail(email);
//        if (admin != null && passwordEncoder.matches(password, admin.getPassword())) {
//            return admin;
//        }
//        return null;
//    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin saveAdmin(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    public Admin getAdminById(int id) {
        return adminRepository.findById(id).orElse(null);
    }

    public void deleteAdmin(int id) {
        adminRepository.deleteById(id);
    }

//    public boolean validateLogin(String email, String password) {
//        Admin admin = authenticate(email, password);
//        return admin != null;
//    }

    public Admin updateAdmin(int id, Admin adminDetails) {
        if (adminRepository.existsById(id)) {
            adminDetails.setAdminId(id);
            if (adminDetails.getPassword() != null) {
                adminDetails.setPassword(passwordEncoder.encode(adminDetails.getPassword()));
            }
            return adminRepository.save(adminDetails);
        }
        return null;
    }
}
