package com.hackaton.project.service;

import com.hackaton.project.model.DatabaseSequence;
import com.hackaton.project.model.User;
import com.hackaton.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User foundedUser = userRepository.findByUsername(username);
        if(foundedUser == null){
            return null;
        }
        String name = foundedUser.getUsername();
        String pwd = foundedUser.getPassword();

        return new org.springframework.security.core.userdetails.User(name,pwd,new ArrayList<>());
    }

    @Autowired
    MongoOperations mongoOperations;


      public int getSequence(String sequenceName){
        Query query = new Query(Criteria.where("_id").is(sequenceName));
        Update update = new Update().inc("seq",1);
        DatabaseSequence counter = mongoOperations.findAndModify(query,update,options().returnNew(true).upsert(true),DatabaseSequence.class);

        return !Objects.isNull(counter) ? counter.getSeq() : 1;

    }


}
