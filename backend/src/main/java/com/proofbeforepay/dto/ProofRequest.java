package com.proofbeforepay.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ProofRequest(
    @NotBlank(message = "Proof details are required.")
    @Size(min = 3, max = 1000, message = "Proof details must contain 3 to 1000 characters.")
    String proofDetails
) {}
