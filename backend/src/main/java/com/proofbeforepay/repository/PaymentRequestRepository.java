package com.proofbeforepay.repository;
import com.proofbeforepay.model.PaymentRequest;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PaymentRequestRepository extends JpaRepository<PaymentRequest,Long> {}
