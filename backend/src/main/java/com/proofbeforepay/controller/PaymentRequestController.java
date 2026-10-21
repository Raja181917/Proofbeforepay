package com.proofbeforepay.controller;
import com.proofbeforepay.dto.*;
import com.proofbeforepay.model.PaymentRequest;
import com.proofbeforepay.service.PaymentRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/requests")
public class PaymentRequestController {
 private final PaymentRequestService service;
 public PaymentRequestController(PaymentRequestService service){this.service=service;}
 @PostMapping @ResponseStatus(HttpStatus.CREATED)
 public PaymentRequest create(@Valid @RequestBody CreatePaymentRequest dto){return service.create(dto);}
 @GetMapping public List<PaymentRequest> getAll(){return service.findAll();}
 @PatchMapping("/{id}/proof")
 public PaymentRequest submitProof(@PathVariable Long id,@Valid @RequestBody ProofRequest dto){return service.submitProof(id,dto);}
 @PatchMapping("/{id}/review")
 public PaymentRequest review(@PathVariable Long id,@Valid @RequestBody ReviewRequest dto){return service.review(id,dto);}
}
