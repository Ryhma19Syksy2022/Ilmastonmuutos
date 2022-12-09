package com.ryhma19.ilmastonmuutos.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ryhma19.ilmastonmuutos.data.user;
import com.ryhma19.ilmastonmuutos.repository.userRepository;

@Service
public class securityService {

    @Autowired
    userRepository repo;

    @Value("${jwt.secret}")
    private String jwtKey;

    @Autowired
    passwordEncoder myEncoder;

    /**
     * register new user
     * @param uname
     * @param pw
     * @return
     */


    public user register(String uname, String pw){
        
        user u = new user(uname, myEncoder.encode(pw));
        repo.save(u);
        return u;
    }

    /**
     * login user. return token or null on wrong password or if user not found.
     * @param uname
     * @param pw
     * @return
     */

    public String login(String uname, String pw){
        

        user u = repo.findById(uname).orElse(null);

        if(u == null || !myEncoder.matches(pw, u.password) ){
            return null;
        }

        Algorithm alg = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(u.username).sign(alg);
    }    


    /**
     * verify jwt token and return username if token is valid
     * @param jwtToken
     * @return
     */

    public String validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
            
        }

        return null;
    }

    /**
     * 
     * @param uname
     * @param pw
     * @return
     */


    public user deactivate(String uname, String pw){

        user u = repo.findById(uname).orElse(null);

        if(u != null && myEncoder.matches(pw, u.password) ){
            repo.deleteById(uname);
            return null;
        }

        return null;
    }  
}
