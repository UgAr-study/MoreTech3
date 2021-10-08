package com.example.server.repository;

import com.example.server.models.DataInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataInfoRepository extends JpaRepository<DataInfo, Integer> {
}
