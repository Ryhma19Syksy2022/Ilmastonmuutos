package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customvisuals")

public class CustomVisual {
    @Id
    private String visual_Id;
    private int layout;
    private String v1;
    private String v3;
    private String v5;
    private String v6;
    private String v7;
    private String v8;
    private String v9;

    public CustomVisual(){

    }
    public String getVisual_Id() {
        return this.visual_Id;
    }

    public void setVisual_Id(String visual_Id) {
        this.visual_Id = visual_Id;
    }

    public int getLayout() {
        return this.layout;
    }

    public void setLayout(int layout) {
        this.layout = layout;
    }

    public String getV1() {
        return this.v1;
    }

    public void setV1(String v1) {
        this.v1 = v1;
    }

    public String getV3() {
        return this.v3;
    }

    public void setV3(String v3) {
        this.v3 = v3;
    }

    public String getV5() {
        return this.v5;
    }

    public void setV5(String v5) {
        this.v5 = v5;
    }

    public String getV6() {
        return this.v6;
    }

    public void setV6(String v6) {
        this.v6 = v6;
    }

    public String getV7() {
        return this.v7;
    }

    public void setV7(String v7) {
        this.v7 = v7;
    }

    public String getV8() {
        return this.v8;
    }

    public void setV8(String v8) {
        this.v8 = v8;
    }

    public String getV9() {
        return this.v9;
    }

    public void setV9(String v9) {
        this.v9 = v9;
    }

    
}
