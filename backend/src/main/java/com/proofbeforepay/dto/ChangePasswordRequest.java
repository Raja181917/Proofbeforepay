package com.proofbeforepay.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ChangePasswordRequest(
    @NotBlank(message = "Email is required.")
    @Email(message = "Enter a valid email address.")
    @Size(max = 254, message = "Email must not exceed 254 characters.")
    String email,

    @NotBlank(message = "Current password is required.")
    @Size(max = 72, message = "Password must not exceed 72 characters.")
    String currentPassword,

    @NotBlank(message = "New password is required.")
    @Size(min = 8, max = 72, message = "New password must contain 8 to 72 characters.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*[0-9]).{8,72}$", message = "New password must include at least one letter and one number.")
    String newPassword
) {}
