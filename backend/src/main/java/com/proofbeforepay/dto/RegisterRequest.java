package com.proofbeforepay.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
    @NotBlank(message = "Full name is required.")
    @Size(min = 2, max = 100, message = "Full name must contain between 2 and 100 characters.")
    String fullName,

    @NotBlank(message = "Email is required.")
    @Email(message = "Enter a valid email address.")
    @Size(max = 254, message = "Email must not exceed 254 characters.")
    String email,

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 72, message = "Password must contain 8 to 72 characters.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*[0-9]).{8,72}$",
             message = "Password must include at least one letter and one number.")
    String password
) {}
