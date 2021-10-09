package com.example.server.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "db_info_list")
@Getter
@Setter
public class DataInfo {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "namespace")
    private String namespace;

    @Column(name = "doc")
    private String doc;

    @Column(name = "fields")
    private String fields;
}
