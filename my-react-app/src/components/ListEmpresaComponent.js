import React, { useEffect, useState } from "react";
import empresaServiceInstance from "../Services/EmpresaServices";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export const ListEmpresaComponent = () => {

    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        listarEmpresas();
    }, [])

	const listarEmpresas = () =>{
		empresaServiceInstance.getAllEmpresas().then(response => {
            setEmpresa(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
	}

	const deleteEmpresa = (empresaId) =>{
		empresaServiceInstance.deleteEmpresa(empresaId).then((response)=>{
			listarEmpresas();
		}).catch(error=>{
			console.log(error);
		})
	}

    return (
        <div className='container'>
            <h2 className='text-center'>LISTA DE EMPRESAS</h2>
            <Link to='/add-empresa' className='btn btn-primary mb-2'>Agregar Empresa</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">id Empresa</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">RUC</th>
                        <th scope="col">Propietario</th>
                        <th scope="col">Fecha Creacion</th>
                        <th scope="col">Provincia</th>
                        <th scope="col">Actividad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresa.map(
                            empresa =>
                                <tr key={empresa.idEmpresa}>
                                    <td>{empresa.idEmpresa}</td>
                                    <td>{empresa.nombre}</td>
                                    <td>{empresa.ruc}</td>
                                    <td>{empresa.propietario}</td>
                                    <td>{format(new Date(empresa.fechaCreacion), 'dd-MM-yyyy')}</td>
                                    <td>{empresa.provincia}</td>
                                    <td>{empresa.actividad}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-empresa/${empresa.idEmpresa}`}>Actualizar</Link>
                                    </td>
									<td>
										<button style={{marginLeft: "10px"}} className='btn btn-danger' onClick={()=> deleteEmpresa(empresa.idEmpresa)}>Eliminar </button>
									</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListEmpresaComponent;
