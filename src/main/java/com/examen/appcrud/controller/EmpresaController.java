package com.examen.appcrud.controller;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examen.appcrud.exception.ResourceNotFoundException;
import com.examen.appcrud.modelo.Empresa;
import com.examen.appcrud.repository.EmpresaRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmpresaController implements Serializable {


	@Autowired
	private EmpresaRepository repo;

	private static final long serialVersionUID = 1L;

	@GetMapping("/empresa")
	public List<Empresa> verEmpresas() {
		return repo.findAll();
	}

	@PostMapping("/empresa")
	public Empresa guardarEmpresa(@RequestBody Empresa nuevo) {
		return repo.save(nuevo);
	}

	@GetMapping("/empresa/{idEmpresa}")
	public ResponseEntity<Empresa> listarEmpresaPorId(@PathVariable int idEmpresa) {
		Empresa empresa = repo.findById(idEmpresa)
				.orElseThrow(()-> new ResourceNotFoundException("el cliente no existe:"+idEmpresa));
		return ResponseEntity.ok(empresa);
	}

	@PutMapping("/empresa/{idEmpresa}")
	public ResponseEntity<Empresa> editarEmpresa(@PathVariable int idEmpresa, @RequestBody Empresa empresaActualizada) {
		Empresa empresa = repo.findById(idEmpresa)
				.orElseThrow(()-> new ResourceNotFoundException("el cliente no existe:"+idEmpresa));
		empresa.setNombre(empresaActualizada.getNombre());
		empresa.setRuc(empresaActualizada.getRuc());
		empresa.setPropietario(empresaActualizada.getPropietario());
		empresa.setProvincia(empresaActualizada.getProvincia());
		empresa.setFechaCreacion(empresaActualizada.getFechaCreacion());
		empresa.setActividad(empresaActualizada.getActividad());

		Empresa empresaActual = repo.save(empresa);
		return ResponseEntity.ok(empresaActual);
	}

	@DeleteMapping("/empresa/{idEmpresa}")
	public void eliminarEmpresa(@PathVariable int idEmpresa) {

		repo.deleteById(idEmpresa);
	}

}
