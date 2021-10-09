package com.example.server.service;

import com.example.server.models.DataInfo;

import java.util.List;


public interface DataInfoService {

    void create(DataInfo dataInfo);

    List<DataInfo> readAll();

    //get item by id
    DataInfo read(int id);

    boolean update(DataInfo dataInfo, int id);

    boolean delete(int id);
}
