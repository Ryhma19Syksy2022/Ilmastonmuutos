package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class user {
    @Id
    public String username;
    public String password;

    public user() {
    }
    
    public user(String username, String pw) {
        this.username = username;
        this.password = pw;
    }
}
