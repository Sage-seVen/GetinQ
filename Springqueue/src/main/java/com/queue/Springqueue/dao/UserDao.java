package com.queue.Springqueue.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.queue.Springqueue.model.User;

@Component
public class UserDao {

		@Autowired
		private MongoTemplate mongoTemplate;


		public User saveUser(User user) {
			mongoTemplate.save(user);
			return user;
		}
		
		public List<User> getAllUsers() {
			return mongoTemplate.findAll(User.class);
		}

		public User getUserById(String userNumber) {
			Query query = new Query();
			query.addCriteria(Criteria.where("userNumber").is(userNumber));
			return mongoTemplate.findOne(query, User.class);
		}

//		public Object getAllUserItems(String resturantId) {
//			Query query = new Query();
//			query.addCriteria(Criteria.where("resturantId").is(resturantId));
//			User resturant = mongoTemplate.findOne(query, User.class);
//			return resturant != null ? resturant.getUserItems() : "User not found.";
//		}
//
//		
//		public String getUserItems(String resturnId, String key) {
//			Query query = new Query();
//			query.fields().include("resturantItems");
//			query.addCriteria(Criteria.where("resturantId").is(resturnId).andOperator(Criteria.where("resturantItems." + key).exists(true)));
//			User resturant = mongoTemplate.findOne(query, User.class);
//			return resturant != null ? resturant.getUserItems().get(key) : "Not found.";
//		}
//
//		
//		public String addUserItems(String resturantId, String key, String value) {
//			Query query = new Query();
//			query.addCriteria(Criteria.where("resturantId").is(resturantId));
//			User resturant = mongoTemplate.findOne(query, User.class);
//			if (resturant != null) {
//				resturant.getUserItems().put(key, value);
//				mongoTemplate.save(resturant);
//				return "Key added.";
//			} else {
//				return "User not found.";
//			}
//		}

		
}
