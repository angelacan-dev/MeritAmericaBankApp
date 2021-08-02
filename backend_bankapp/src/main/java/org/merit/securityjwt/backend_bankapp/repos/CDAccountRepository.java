package org.merit.securityjwt.backend_bankapp.repos;

import org.merit.securityjwt.backend_bankapp.models.CDAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CDAccountRepository extends JpaRepository<CDAccount, Long> {

	CDAccount findById(long id);
	
}
