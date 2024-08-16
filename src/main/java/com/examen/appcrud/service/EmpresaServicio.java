package com.examen.appcrud.service;

import java.util.List;

import com.examen.appcrud.modelo.Empresa;


public interface EmpresaServicio {

	void crearEmpresa(Empresa empresa);
	
	public List<Empresa> listarEmpresa();
	
	public Empresa buscarEmpresa(int idEmpresa);

	public void eliminarEmpresa(int idEmpresa);
}
