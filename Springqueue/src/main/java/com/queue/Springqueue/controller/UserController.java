package com.queue.Springqueue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.queue.Springqueue.dao.UserDao;
import com.queue.Springqueue.model.User;

@CrossOrigin
@RestController
public class UserController {

	
	@Autowired
	UserDao userService;
	
	@PostMapping(value="user")
	public User saveUser(@RequestBody User user)
	{
		return userService.saveUser(user);
	}
	
	@GetMapping(value="user")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers(); 
		
	}
	
	@GetMapping(value="user/{userNumber}/{password}")
	public Object getRest(@PathVariable long userNumber, @PathVariable String password )
	{
		return userService.getUserById(userNumber, password); 
		
	}
	
	
//	@DeleteMapping(value="user/{userNumber}")
//	public String deleteUser(@PathVariable int userNumber )
//	{
//		return userService.deleteUser(userNumber); 
//		
//	}
	
//	@PutMapping(value="user")
//	public String updateRest(@RequestBody User user )
//	{
//		return userService.updateUser(user); 
//
//	}
}
