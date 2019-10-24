package com.queue.Springqueue.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;
import com.queue.Springqueue.model.Hospital;

@Component
public class HospitalDao {

			@Autowired
			private MongoTemplate mongoTemplate;


			public Hospital saveAppointment(Hospital hospital) {
				hospital.setStatus("Requested");
				mongoTemplate.save(hospital);
				return hospital;
			}
			
			public List<Hospital> getAllPatients() {
				return mongoTemplate.findAll(Hospital.class);
			}
			
//			public Resturant getResturantById(String resturantId) {
//				Query query = new Query();
//				query.addCriteria(Criteria.where("resturantId").is(resturantId));
//				return mongoTemplate.findOne(query, Resturant.class);
//			}
			
			
			public String validatereq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Hospital hosp=mongoTemplate.findOne(query, Hospital.class);
				hosp.setStatus("Approved");
				mongoTemplate.save(hosp);
				return "Status Approved";
			}
			
			public String rejectreq(long userNumber) {
				Query query=new Query();
				query.addCriteria(Criteria.where("userNumber").is(userNumber));
				Hospital hosp=mongoTemplate.findOne(query, Hospital.class);
				hosp.setStatus("Rejected");
				mongoTemplate.save(hosp);
				return "Status Rejected";
			}
}
