package com.examen.appcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.examen.appcrud.modelo.Provincia;
import com.examen.appcrud.repository.ProvinciaRepository;
import com.examen.appcrud.service.ProvinciaServicio;

@Component
@Service
public class ProvinciaServiceImpl implements ProvinciaServicio{

	
	@Autowired
	private ProvinciaRepository repo;
	
	@Override
	public void crearProvincia(Provincia nuevoProvincia) {
		// TODO Auto-generated method stub
		repo.save(nuevoProvincia);
	}

	@Override
	public List<Provincia> listarProvincia() {
		// TODO Auto-generated method stub
		return repo.listarProvincia();
	}

	@Override
	public Provincia buscarProvincia(int idProvincia) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void eliminarProvincia(int idProvincia) {
		// TODO Auto-generated method stub
		
	}

}
