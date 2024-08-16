package com.examen.appcrud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examen.appcrud.modelo.Provincia;

@Repository
public interface ProvinciaRepository extends JpaRepository<Provincia, Integer> {
 
	@Query("Select p from Provincia p")
	public List<Provincia> listarProvincia();
	
	@Query("select p from Provincia p where p.idProvincia = ?1")
	public Provincia buscarProvinciaId(int idProvincia);
	
}
