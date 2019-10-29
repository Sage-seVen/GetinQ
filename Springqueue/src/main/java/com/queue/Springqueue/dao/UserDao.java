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

		public User getUserByIdpass(long userNumber, String password) {
			Query query = new Query();
			query.addCriteria(Criteria.where("userNumber").is(userNumber));
			query.addCriteria(Criteria.where("password").is(password));
			User user= mongoTemplate.findOne(query, User.class);
			
			return user;
		}
		
		public User getUserById(long userNumber) {
			Query query = new Query();
			query.addCriteria(Criteria.where("userNumber").is(userNumber));
			User user= mongoTemplate.findOne(query, User.class);
			return user;
		}
		
		public User updateUser(User user)
		{
			mongoTemplate.save(user);
			return user;
		}
		
		public String resetPassword(long userNumber,String password)
		{
			Query query=new Query();
			query.addCriteria(Criteria.where("userNumber").is(userNumber));
			User user=mongoTemplate.findOne(query, User.class);
			user.setPassword(password);
			mongoTemplate.save(user);
			return "Password Updated";
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
