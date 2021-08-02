package org.merit.securityjwt.backend_bankapp.repos;

import org.merit.securityjwt.backend_bankapp.models.AccountHolder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountHolderRepository extends JpaRepository<AccountHolder, Long> {
	
	AccountHolder findById(long id); //placeholder
	AccountHolder findByUserId(long userId);
}
