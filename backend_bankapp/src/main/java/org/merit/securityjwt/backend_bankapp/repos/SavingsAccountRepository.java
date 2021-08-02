package org.merit.securityjwt.backend_bankapp.repos;

import org.merit.securityjwt.backend_bankapp.models.SavingsAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingsAccountRepository extends JpaRepository<SavingsAccount, Long> {
	
	SavingsAccount findById(long id); // placeholder
}
