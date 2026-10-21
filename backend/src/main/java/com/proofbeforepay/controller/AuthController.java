
package com.proofbeforepay.controller;

import com.proofbeforepay.dto.AuthResponse;
import com.proofbeforepay.dto.ChangePasswordRequest;
import com.proofbeforepay.dto.LoginRequest;
import com.proofbeforepay.dto.RegisterRequest;
import com.proofbeforepay.service.AuthService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(
            @Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/change-password")
    @ResponseStatus(HttpStatus.OK)
    public java.util.Map<String, String> changePassword(
            @Valid @RequestBody ChangePasswordRequest request) {
        authService.changePassword(request);
        return java.util.Map.of("message", "Password changed successfully.");
    }

    @PostMapping("/login")
    public AuthResponse login(
            @Valid @RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
