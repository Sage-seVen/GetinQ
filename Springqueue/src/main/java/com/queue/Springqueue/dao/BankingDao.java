package com.queue.Springqueue.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
			
			public Banking getBankerById(long userNumber)
			{
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Banking bank=mongoTemplate.findOne(query, Banking.class);
				return bank;
			}
			
			public List<Banking> validatereq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Banking hosp=mongoTemplate.findOne(query, Banking.class);
				hosp.setStatus("Approved");
				mongoTemplate.save(hosp);
				return getAllBankers();
			}
			
			public List<Banking> rejectreq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Banking hosp=mongoTemplate.findOne(query, Banking.class);
				hosp.setStatus("Rejected");
				mongoTemplate.save(hosp);
				return getAllBankers();
			}
			
			
}
