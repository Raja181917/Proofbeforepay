package com.proofbeforepay.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ReviewRequest(
    @NotBlank(message = "Decision is required.")
    @Pattern(regexp = "(?i)APPROVED|REJECTED", message = "Decision must be APPROVED or REJECTED.")
    String decision,

    @Size(max = 1000, message = "Review comment must not exceed 1000 characters.")
    String reviewComment
) {}
