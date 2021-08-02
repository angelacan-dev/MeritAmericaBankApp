package org.merit.securityjwt.backend_bankapp.repos;

import java.util.Optional;

import org.merit.securityjwt.backend_bankapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
		
//	Optional<User> findByUsername(String userName);	
	User findByUsername(String userName); //placeholder
}

