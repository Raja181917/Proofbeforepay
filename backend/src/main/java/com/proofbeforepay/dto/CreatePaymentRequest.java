package com.proofbeforepay.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;

public record CreatePaymentRequest(
    @NotBlank(message = "Payment title is required.")
    @Size(max = 120, message = "Payment title must not exceed 120 characters.")
    String title,

    @NotNull(message = "Amount is required.")
    @DecimalMin(value = "0.01", message = "Amount must be greater than zero.")
    @Digits(integer = 10, fraction = 2, message = "Amount can have up to 10 integer digits and 2 decimal places.")
    BigDecimal amount,

    @Size(max = 1000, message = "Description must not exceed 1000 characters.")
    String description,

    @NotBlank(message = "Requester name is required.")
    @Size(min = 2, max = 100, message = "Requester name must contain 2 to 100 characters.")
    String requesterName,

    @NotBlank(message = "Receiver name is required.")
    @Size(min = 2, max = 100, message = "Receiver name must contain 2 to 100 characters.")
    String receiverName
) {}
