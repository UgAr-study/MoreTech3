package com.example.server.controller;

import com.example.server.models.DataInfo;
import com.example.server.models.Field;
import com.example.server.service.DataInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@RestController
public class DataInfoController {

    @Autowired
    private DataInfoService dataInfoService;

    //@Autowired
    //private FieldParseService fieldParseService;

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

    @GetMapping(value = "/index")
    public ResponseEntity<List<DataInfo>> getByParams(@RequestParam(value = "partner", required = false) String partner) {
        String[] allParams = new String[]{partner};

        for (String iAllParam : allParams) {
            if (iAllParam == null || iAllParam.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }

        ResponseEntity<List<DataInfo>> responseEntityDataInfosAll = getAll();
        if (responseEntityDataInfosAll.getStatusCode() != HttpStatus.OK)
            return new ResponseEntity<>(responseEntityDataInfosAll.getStatusCode());
        
        List<DataInfo> dataInfosAll = getAll().getBody();
        List<DataInfo> dataInfos = new ArrayList<>();
        
        for (DataInfo iDataInfosAll : dataInfosAll) {
            for (Field iField : iDataInfosAll.getFields()) {
                for (String iAllParam : allParams) {
                    if (Objects.equals(iField.getName(), iAllParam)) {
                        dataInfos.add(iDataInfosAll);
                    }
                }
            }
        }

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
