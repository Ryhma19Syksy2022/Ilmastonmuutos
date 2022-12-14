package com.ryhma19.ilmastonmuutos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ryhma19.ilmastonmuutos.data.CustomVisual;
import com.ryhma19.ilmastonmuutos.repository.CustomVisualRepository;

@Service
public class customvisualService {

    @Autowired
    CustomVisualRepository repo;


    /**
     * 
     * @param Visual_id
     * @param owner
     * @param Layout
     * @param v1
     * @param v3
     * @param v5
     * @param v6
     * @param v7
     * @param v8
     * @param v9
     * @return
     */

    public CustomVisual savevisual(String visual_id, String owner, Integer layout, Boolean v1, Boolean v3, Boolean v5, Boolean v6, Boolean v7, Boolean v8, Boolean v9){

        CustomVisual c = new CustomVisual(visual_id, owner, layout, v1, v3, v5, v6, v7, v8, v9);
        repo.save(c);
        return c;
    }

    public List<CustomVisual> findvisuals(String owner){
        return repo.findByOwner(owner);

    }

}
