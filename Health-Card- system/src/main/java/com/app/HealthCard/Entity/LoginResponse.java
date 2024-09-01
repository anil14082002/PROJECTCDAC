package com.app.HealthCard.Entity;

public class LoginResponse {
    private String email;
    private String token;

    public LoginResponse(String email, String token) {
        this.email = email;
        this.token = token;
    }

    // Getters
    public String getEmail() {
        return email;
    }

    public String getToken() {
        return token;
    }
}
