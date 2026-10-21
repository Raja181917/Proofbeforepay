
package com.proofbeforepay.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PBP_USERS")
public class AppUser {

    @Id
    // Oracle 11g does not support IDENTITY columns. Use a database sequence instead.
    @SequenceGenerator(
        name = "pbp_users_seq_generator",
        sequenceName = "PBP_USERS_SEQ",
        allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pbp_users_seq_generator")
    private Long id;

    @Column(nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, unique = true, length = 254)
    private String email;

    @Column(nullable = false, length = 100)
    private String passwordHash;

    protected AppUser() {
    }

    public AppUser(String fullName, String email, String passwordHash) {
        this.fullName = fullName;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }
}
