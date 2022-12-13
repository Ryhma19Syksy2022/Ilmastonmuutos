package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customvisuals")

public class CustomVisual {
    @Id
    public String visual_id;
    public String owner;
    private int layout;
    private Boolean v1;
    private Boolean v3;
    private Boolean v5;
    private Boolean v6;
    private Boolean v7;
    private Boolean v8;
    private Boolean v9;

    public CustomVisual(){
    }

    public CustomVisual(String visual_id, String owner, Integer layout, Boolean v1, Boolean v3, Boolean v5, Boolean v6, Boolean v7, Boolean v8, Boolean v9) {
        this.visual_id = visual_id;
        this.owner = owner;
        this.layout = layout;
        this.v1 = v1;
        this.v3 = v3;
        this.v5 = v5;
        this.v6 = v6;
        this.v7 = v7;
        this.v8 = v8;
        this.v9 = v9;
    }

    public String getVisual_Id() {
        return this.visual_id;
    }

    public void setVisual_Id(String visual_id) {
        this.visual_id = visual_id;
    }

    public int getLayout() {
        return this.layout;
    }

    public void setLayout(int Layout) {
        this.layout = Layout;
    }

    public Boolean getV1() {
        return this.v1;
    }

    public void setV1(Boolean v1) {
        this.v1 = v1;
    }

    public Boolean getV3() {
        return this.v3;
    }

    public void setV3(Boolean v3) {
        this.v3 = v3;
    }

    public Boolean getV5() {
        return this.v5;
    }

    public void setV5(Boolean v5) {
        this.v5 = v5;
    }

    public Boolean getV6() {
        return this.v6;
    }

    public void setV6(Boolean v6) {
        this.v6 = v6;
    }

    public Boolean getV7() {
        return this.v7;
    }

    public void setV7(Boolean v7) {
        this.v7 = v7;
    }

    public Boolean getV8() {
        return this.v8;
    }

    public void setV8(Boolean v8) {
        this.v8 = v8;
    }

    public Boolean getV9() {
        return this.v9;
    }

    public void setV9(Boolean v9) {
        this.v9 = v9;
    }

    
}
