package org.merit.securityjwt.backend_bankapp.repos;

import org.merit.securityjwt.backend_bankapp.models.CheckingAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckingAccountRepository extends JpaRepository<CheckingAccount,Long> {

	CheckingAccount findById(long id); //placeholder
}
