package com.example.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
public class Field implements Serializable {
    private String name;
    private List<String> type;
}
