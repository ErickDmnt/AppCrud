package com.examen.appcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.examen.appcrud.modelo.Actividad;
import com.examen.appcrud.repository.ActividadRepository;
import com.examen.appcrud.service.ActividadServicio;

@Component
@Service
public class ActividadServiceImpl implements ActividadServicio{

	
	@Autowired
	private ActividadRepository repo;
	
	@Override
	public void crearCliente(Actividad nuevoActividad) {
		// TODO Auto-generated method stub
		repo.save(nuevoActividad);
	}

	@Override
	public List<Actividad> listarActividad() {
		// TODO Auto-generated method stub
		return repo.listarActividad();
	}

	@Override
	public Actividad buscarActividad(int idActividad) {
		// TODO Auto-generated method stub
		return null;
	}

}
