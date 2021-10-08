package com.example.server.service;

import com.example.server.models.DataInfo;
import com.example.server.repository.DataInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DataInfoServiceImpl implements DataInfoService{

    @Autowired
    private DataInfoRepository dataInfoRepository;

    @Override
    public void create(DataInfo dataInfo) {
        dataInfoRepository.save(dataInfo);
    }

    @Override
    public List<DataInfo> readAll() {
        return dataInfoRepository.findAll();
    }

    @Override
    public DataInfo read(int id) {
        return dataInfoRepository.getById(id);
    }

    @Override
    public boolean update(DataInfo dataInfo, int id) {

        if (dataInfoRepository.existsById(id)) {
            dataInfo.setId(id);
            dataInfoRepository.save(dataInfo);
            return true;
        }

        return false;
    }

    @Override
    public boolean delete(int id) {

        if (dataInfoRepository.existsById(id)) {
            dataInfoRepository.deleteById(id);
            return true;
        }

        return false;
    }
}
