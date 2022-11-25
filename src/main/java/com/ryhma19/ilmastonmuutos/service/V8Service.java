package com.ryhma19.ilmastonmuutos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ryhma19.ilmastonmuutos.data.V8;
import com.ryhma19.ilmastonmuutos.repository.V8Repository;

@Service
public class V8Service {
    @Autowired
    V8Repository v8Repository;

    public List<V8> getAllData() {
        return v8Repository.findAll();
    }

}
