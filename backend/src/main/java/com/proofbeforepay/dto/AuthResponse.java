
package com.proofbeforepay.dto;

public record AuthResponse(
    Long id,
    String fullName,
    String email,
    String message
) {}
