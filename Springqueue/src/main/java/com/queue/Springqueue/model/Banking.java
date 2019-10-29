package com.queue.Springqueue.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Banking {

		@Id
		long userNumber;
		Date date;
		String requestType;
		String status;
		int loanToken;
		int depositToken;
		public long getUserNumber() {
			return userNumber;
		}
		public void setUserNumber(long userNumber) {
			this.userNumber = userNumber;
		}
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public String getRequestType() {
			return requestType;
		}
		public void setRequestType(String requestType) {
			this.requestType = requestType;
		}
		public int getLoanToken() {
			return loanToken;
		}
		public void setLoanToken(int loanToken) {
			this.loanToken = loanToken;
		}
		public int getDepositToken() {
			return depositToken;
		}
		public void setDepositToken(int depositToken) {
			this.depositToken = depositToken;
		}
		
}
