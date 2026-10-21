package com.proofbeforepay.service;
import com.proofbeforepay.dto.*;
import com.proofbeforepay.model.*;
import com.proofbeforepay.repository.PaymentRequestRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Locale;
@Service
public class PaymentRequestService {
 private final PaymentRequestRepository repository;
 public PaymentRequestService(PaymentRequestRepository repository){this.repository=repository;}
 public PaymentRequest create(CreatePaymentRequest dto){
  String title = dto.title() == null ? "" : dto.title().trim();
  String requester = dto.requesterName() == null ? "" : dto.requesterName().trim();
  String receiver = dto.receiverName() == null ? "" : dto.receiverName().trim();
  if (title.isEmpty() || requester.length() < 2 || receiver.length() < 2) {
   throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
       "Title, requester name, and receiver name are required.");
  }
  if (dto.amount() == null || dto.amount().signum() <= 0) {
   throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Amount must be greater than zero.");
  }
  PaymentRequest r=new PaymentRequest();r.setTitle(title);r.setAmount(dto.amount());
  r.setDescription(dto.description() == null ? "" : dto.description().trim());
  r.setRequesterName(requester);r.setReceiverName(receiver);
  r.setStatus(RequestStatus.PENDING_PROOF);return repository.save(r);
 }
 public List<PaymentRequest> findAll(){return repository.findAll();}
 public PaymentRequest submitProof(Long id,ProofRequest dto){
  PaymentRequest r=getOrThrow(id);
  if(r.getStatus()==RequestStatus.APPROVED||r.getStatus()==RequestStatus.REJECTED)
   throw new ResponseStatusException(HttpStatus.CONFLICT,"This request has already been reviewed.");
  r.setProofDetails(dto.proofDetails().trim());r.setStatus(RequestStatus.PENDING_REVIEW);return repository.save(r);
 }
 public PaymentRequest review(Long id,ReviewRequest dto){
  PaymentRequest r=getOrThrow(id);
  if (dto.decision() == null || dto.decision().isBlank()) {
   throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Decision must be APPROVED or REJECTED.");
  }
  String decision=dto.decision().trim().toUpperCase(Locale.ROOT);
  if(!decision.equals("APPROVED")&&!decision.equals("REJECTED"))
   throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Decision must be APPROVED or REJECTED.");
  if(r.getProofDetails()==null||r.getProofDetails().isBlank())
   throw new ResponseStatusException(HttpStatus.CONFLICT,"Submit proof before reviewing the request.");
  r.setStatus(RequestStatus.valueOf(decision));r.setReviewComment(dto.reviewComment());return repository.save(r);
 }
 private PaymentRequest getOrThrow(Long id){
  return repository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Payment request not found."));
 }
}
