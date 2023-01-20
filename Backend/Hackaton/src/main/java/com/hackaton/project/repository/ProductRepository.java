package com.hackaton.project.repository;

import com.hackaton.project.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product,Integer> {

    List<Product> findByProductId(int productId);
    List<Product> deleteByProductId(int productId);
    Product findById(int _id);
}
