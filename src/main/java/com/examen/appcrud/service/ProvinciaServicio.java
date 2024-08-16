package com.examen.appcrud.service;

import java.util.List;

import com.examen.appcrud.modelo.Provincia;


public interface ProvinciaServicio {

public void crearProvincia(Provincia nuevoProvincia);
	
	public List<Provincia> listarProvincia();
	
	public Provincia buscarProvincia(int idProvincia);
	
	public void eliminarProvincia(int idProvincia);
}
