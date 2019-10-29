package com.queue.Springqueue.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.queue.Springqueue.model.Banking;

@Component
public class BankingDao {

//			int loanCount;
//			int depositCount;
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
			
			
			public Banking getLastLoanToken()
			{
				Query query = new Query();
				query.with(new Sort(Sort.Direction.DESC, "loanToken"));
				query.limit(1);
				Banking maxObject = mongoTemplate.findOne(query, Banking.class);
				return maxObject;
			}
			
			public Banking getLastDepositToken()
			{
				Query query = new Query();
				query.with(new Sort(Sort.Direction.DESC, "depositToken"));
				query.limit(1);
				Banking maxObject = mongoTemplate.findOne(query, Banking.class);
				return maxObject;
			}
			
			
			public List<Banking> validatereq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Banking hosp=mongoTemplate.findOne(query, Banking.class);
				if((hosp.getRequestType().equals("Loan") && hosp.getStatus().equals("Requested"))||(hosp.getRequestType().equals("Loan") && hosp.getStatus().equals("Rejected")))
				{
					hosp.setLoanToken(getLastLoanToken().getLoanToken()+1);
				}
				if((hosp.getRequestType().equals("Deposit") && hosp.getStatus().equals("Requested"))||(hosp.getRequestType().equals("Deposit") && hosp.getStatus().equals("Rejected")))
				{
					hosp.setDepositToken(getLastDepositToken().getLoanToken()+1);
				}
				hosp.setStatus("Approved");
				
//				hosp.setLoanToken(getLastLoanToken().getLoanToken()+1);
				
				mongoTemplate.save(hosp);
				return getAllBankers();
			}
			
			public List<Banking> rejectreq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Banking hosp=mongoTemplate.findOne(query, Banking.class);
				if(hosp.getRequestType().equals("Loan"))
				{
					hosp.setLoanToken(0);
				}
				if(hosp.getRequestType().equals("Deposit"))
				{
					hosp.setLoanToken(0);
				}
				hosp.setStatus("Rejected");
				mongoTemplate.save(hosp);
				return getAllBankers();
			}
			
			
}
