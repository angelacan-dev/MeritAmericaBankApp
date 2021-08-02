package org.merit.securityjwt.backend_bankapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.merit.securityjwt.backend_bankapp.exceptions.ExceedsCombinedBalanceLimitException;
import org.merit.securityjwt.backend_bankapp.exceptions.ExceedsFraudSuspicionLimitException;
import org.merit.securityjwt.backend_bankapp.exceptions.MissingDataException;
import org.merit.securityjwt.backend_bankapp.exceptions.NotFoundException;
import org.merit.securityjwt.backend_bankapp.models.AccountHolder;
import org.merit.securityjwt.backend_bankapp.models.AuthenticationRequest;
import org.merit.securityjwt.backend_bankapp.models.AuthenticationResponse;
import org.merit.securityjwt.backend_bankapp.models.CDAccount;
import org.merit.securityjwt.backend_bankapp.models.CDOffering;
import org.merit.securityjwt.backend_bankapp.models.CheckingAccount;
import org.merit.securityjwt.backend_bankapp.models.SavingsAccount;
import org.merit.securityjwt.backend_bankapp.models.User;
import org.merit.securityjwt.backend_bankapp.servises.MeritBankService;
import org.merit.securityjwt.backend_bankapp.servises.MyUserDetailsService;
import org.merit.securityjwt.backend_bankapp.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountHolderController {
	
	private final Logger log = LoggerFactory.getLogger(AccountHolderController.class);
	
	@Autowired private MeritBankService meritBankService;
		
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	@ResponseStatus(HttpStatus.OK) //Redundant but can do if your team prefers
//	public String greetMe() { return "<html><h2>Welcome to Merit Bank Assignment 7</h2></html>"; }

	@PostMapping(value = "/accountHolders")
	@ResponseStatus(HttpStatus.CREATED)
	public AccountHolder addAccountHolder(@RequestBody @Valid AccountHolder accountHolder) throws MissingDataException {
		meritBankService.addAccountHolder(accountHolder); 
		return accountHolder;
	}

	@GetMapping(value = "/accountHolders")
	@ResponseStatus(HttpStatus.OK) 
	public List<AccountHolder> getAccountHolders() { 
		return meritBankService.getAccountHolders(); 
	}

	@GetMapping(value = "/accountHolders/{customerId}")
	@ResponseStatus(HttpStatus.OK)
	public AccountHolder getAccountHolderById(@PathVariable long customerId) throws NotFoundException {
		return meritBankService.getAccountHolder(customerId);
	}
}