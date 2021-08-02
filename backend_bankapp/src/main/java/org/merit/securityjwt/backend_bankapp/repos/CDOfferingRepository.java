package org.merit.securityjwt.backend_bankapp.repos;

import org.merit.securityjwt.backend_bankapp.models.CDOffering;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CDOfferingRepository extends JpaRepository<CDOffering, Integer> {
	
	CDOffering findById(int id); // placeholder
}