package com.app.HealthCard.Repository;

import com.app.HealthCard.Entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CardRepository extends JpaRepository<Card, Integer> {
	
	    @Query("SELECT c FROM Card c WHERE c.patient.id = :patientId")
	    List<Card> findByPatientId(@Param("patientId") int patientId);
	}


