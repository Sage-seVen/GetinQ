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

import com.queue.Springqueue.dao.HospitalDao;
import com.queue.Springqueue.model.Hospital;



@CrossOrigin
@RestController
public class HospitalController {

	
	  
	 
	@Autowired
	HospitalDao hospitaldao;
	  @PostMapping(value="hospital") 
	  public Hospital create(@RequestBody Hospital hospital) {
	  return hospitaldao.saveAppointment(hospital); 
	  }
	  
	  @GetMapping(value="hospital")
		public List<Hospital> getAllBankers()
		{
			return hospitaldao.getAllPatients();
		}
	  
	  @PutMapping(value="hospital")
		public String updateRest(@RequestBody Hospital hospital )
		{
			//return hospitaldao.updateResturant(hospital);// this method is not built till now
		  return "mastu";
		}
	  
	  @PutMapping(value="hospital/{userNumber}")
		public List<Hospital> validatereq(@PathVariable long userNumber )
		{
			return hospitaldao.validatereq(userNumber); 

		}
	  @PutMapping(value="hospital1/{userNumber}")
		public List<Hospital> rejectreq(@PathVariable long userNumber )
		{
			return hospitaldao.rejectreq(userNumber); 

		}
	
}

