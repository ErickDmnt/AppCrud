package com.examen.appcrud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examen.appcrud.modelo.Actividad;

@Repository
public interface ActividadRepository extends JpaRepository<Actividad, Integer> {

	@Query("Select a from Actividad a")
	public List<Actividad> listarActividad();
	
	@Query("select a from Actividad a where a.idActividad = ?1")
	public Actividad buscarActividadId(int idActividad);
}
