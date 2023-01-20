package com.hackaton.project.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor

public class AuthenticationResponseId {

    private int response;
    public int getResponse() {
        return response;
    }


    public void setResponse(int response) {
        this.response = response;
    }
}