package com.examen.appcrud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examen.appcrud.modelo.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

	
}
