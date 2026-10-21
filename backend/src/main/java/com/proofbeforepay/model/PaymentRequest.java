package com.proofbeforepay.model;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
@Entity
@Table(name="PAYMENT_REQUESTS")
public class PaymentRequest {
 @Id @GeneratedValue(strategy=GenerationType.SEQUENCE,generator="payment_request_seq")
 @SequenceGenerator(name="payment_request_seq",sequenceName="PAYMENT_REQUESTS_SEQ",allocationSize=1)
 private Long id;
 @Column(nullable=false,length=120) private String title;
 @Column(nullable=false,precision=12,scale=2) private BigDecimal amount;
 @Column(length=1000) private String description;
 @Column(nullable=false,length=100) private String requesterName;
 @Column(nullable=false,length=100) private String receiverName;
 @Enumerated(EnumType.STRING) @Column(nullable=false,length=30) private RequestStatus status=RequestStatus.PENDING_PROOF;
 @Column(length=1000) private String proofDetails;
 @Column(length=1000) private String reviewComment;
 private LocalDateTime createdAt;
 private LocalDateTime updatedAt;
 @PrePersist void onCreate(){createdAt=LocalDateTime.now();updatedAt=createdAt;if(status==null)status=RequestStatus.PENDING_PROOF;}
 @PreUpdate void onUpdate(){updatedAt=LocalDateTime.now();}
 public Long getId(){return id;}
 public String getTitle(){return title;} public void setTitle(String v){title=v;}
 public BigDecimal getAmount(){return amount;} public void setAmount(BigDecimal v){amount=v;}
 public String getDescription(){return description;} public void setDescription(String v){description=v;}
 public String getRequesterName(){return requesterName;} public void setRequesterName(String v){requesterName=v;}
 public String getReceiverName(){return receiverName;} public void setReceiverName(String v){receiverName=v;}
 public RequestStatus getStatus(){return status;} public void setStatus(RequestStatus v){status=v;}
 public String getProofDetails(){return proofDetails;} public void setProofDetails(String v){proofDetails=v;}
 public String getReviewComment(){return reviewComment;} public void setReviewComment(String v){reviewComment=v;}
 public LocalDateTime getCreatedAt(){return createdAt;} public LocalDateTime getUpdatedAt(){return updatedAt;}
}
