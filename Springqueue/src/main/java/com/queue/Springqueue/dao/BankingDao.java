package com.queue.Springqueue.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import com.queue.Springqueue.model.Banking;

@Component
public class BankingDao {

			@Autowired
			private MongoTemplate mongoTemplate;


			public Banking saveToken(Banking banking) {
				mongoTemplate.save(banking);
				return banking;
			}
			
			public List<Banking> getAllBankers() {
				return mongoTemplate.findAll(Banking.class);
			}
}
