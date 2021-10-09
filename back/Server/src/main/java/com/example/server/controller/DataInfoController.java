package com.example.server.controller;

import com.example.server.models.DataInfo;
import com.example.server.service.DataInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class DataInfoController {

    @Autowired
    private DataInfoService dataInfoService;

    @PostMapping(value = "/index")
    public ResponseEntity<?> create (@RequestBody DataInfo dataInfo) {
        dataInfoService.create(dataInfo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/index")
    public ResponseEntity<List<DataInfo>> getAll() {
        List<DataInfo> dataInfos = dataInfoService.readAll();

        return dataInfos != null && !dataInfos.isEmpty()
                ? new ResponseEntity<>(dataInfos, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/index/{id}")
    public ResponseEntity<DataInfo> getById(@PathVariable(name = "id") int id) {
        DataInfo dataInfo = dataInfoService.read(id);

        return dataInfo != null
                ? new ResponseEntity<>(dataInfo, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/index/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") int id, @RequestBody DataInfo dataInfo) {
        return dataInfoService.update(dataInfo, id)
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

    @DeleteMapping(value = "/index/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") int id) {
        return dataInfoService.delete(id)
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }
}
