package com.example.server.service;

import com.example.server.models.Field;

import java.util.List;

public interface FieldParseService {
    List<Field> getFields(String jsonString);
}
