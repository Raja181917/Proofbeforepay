# API examples

Base URL: `http://localhost:8080/api/requests`

## Create request
POST `/api/requests`
```json
{
  "title": "Laptop payment",
  "amount": 15000,
  "description": "Laptop purchase payment",
  "requesterName": "Raja",
  "receiverName": "Rahul"
}
```

## List requests
GET `/api/requests`

## Submit proof
PATCH `/api/requests/{id}/proof`
```json
{ "proofDetails": "UPI reference: 123456789" }
```

## Review
PATCH `/api/requests/{id}/review`
```json
{ "decision": "APPROVED", "reviewComment": "Payment proof verified" }
```
Use `REJECTED` to reject a request.
