package com.hackaton.project.repository;


import com.hackaton.project.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role,Integer> {
    Role findByRole(String role);
}
