package com.examen.appcrud.service;

import java.util.List;

import com.examen.appcrud.modelo.Actividad;


public interface ActividadServicio {

public void crearCliente(Actividad nuevoActividad);
	
	public List<Actividad> listarActividad();
	
	public Actividad buscarActividad(int idActividad);
	
}
