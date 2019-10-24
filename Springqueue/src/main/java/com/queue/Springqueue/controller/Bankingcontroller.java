package com.queue.Springqueue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.queue.Springqueue.dao.BankingDao;
import com.queue.Springqueue.model.Banking;
import com.queue.Springqueue.model.User;

@CrossOrigin
@RestController
public class Bankingcontroller {

	
	  
	 
	@Autowired
	BankingDao bankingdao;
	  @PostMapping(value="banking") 
	  public Banking create(@RequestBody Banking banking) {
	  
	  return bankingdao.saveToken(banking); 
	  }
	  
	  @GetMapping(value="banking")
		public List<Banking> getAllBankers()
		{
			return bankingdao.getAllBankers(); 
		}
	  
	  //normal update method have to write
	  

	  @PutMapping(value="banking/{userNumber}")
		public String validatereq(@PathVariable long userNumber )
		{
			return bankingdao.validatereq(userNumber); 

		}
	  @PutMapping(value="banking1/{userNumber}")
		public String rejectreq(@PathVariable long userNumber )
		{
			return bankingdao.rejectreq(userNumber); 

		}
	
}

