import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import empresaServiceInstance from '../Services/EmpresaServices';

export const AddEmpresaComponent = () => {

    const [nombre, setNombre] = useState('');
    const [ruc, setRuc] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');
    const [provincia, setProvincia] = useState('');
    const [actividad, setActividad] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmpresa = (e) => {
        e.preventDefault();
        const empresa = { nombre, ruc, propietario, fechaCreacion, provincia, actividad };
        if (id) {

            empresaServiceInstance.updateEmpresa(id, empresa).then((response) => {
                console.log(response.data);
                navigate('/empresa');
            }).catch(error => {
                console.log(error);
            })
        } else {
            empresaServiceInstance.createEmpresa(empresa).then((response) => {
                console.log(response.data);
                navigate('/empresa');
            }).catch(error => {
                console.log(error);
            })
        }


    }

    useEffect(() => {
        if (id) {
            empresaServiceInstance.getEmpresaById(id).then(response => {
                setNombre(response.data.nombre);
                setRuc(response.data.ruc);
                setPropietario(response.data.propietario);
                setFechaCreacion(response.data.fechaCreacion);
                setProvincia(response.data.provincia);
                setActividad(response.data.actividad);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);


    const title = () => {
        if (id) {
            return <label className='text-center'> Actualizar Empresa</label>;
        } else {
            return <label className='text-center'> Agregar Empresa</label>;
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>
                            {
                                title()
                            }
                        </h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Nombre</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su nombre'
                                        name='nombre'
                                        className='form-control'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />

                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>RUC</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su ruc'
                                        name='ruc'
                                        className='form-control'
                                        value={ruc}
                                        onChange={(e) => setRuc(e.target.value)}
                                    />

                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Propietario</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su propietario'
                                        name='propietario'
                                        className='form-control'
                                        value={propietario}
                                        onChange={(e) => setPropietario(e.target.value)}
                                    />

                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>FechaCreacion</label>
                                    <input
                                        type='date'
                                        name='fechaCreacion'
                                        className='form-control'
                                        value={fechaCreacion}
                                        onChange={(e) => setFechaCreacion(e.target.value)}
                                    />

                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Provincia</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su provincia'
                                        name='provincia'
                                        className='form-control'
                                        value={provincia}
                                        onChange={(e) => setProvincia(e.target.value)}
                                    />

                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Actividad</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su actividad'
                                        name='actividad'
                                        className='form-control'
                                        value={actividad}
                                        onChange={(e) => setActividad(e.target.value)}
                                    />

                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmpresa(e)}>Guardar</button>
                                <Link to='/empresa' className='btn btn-danger'>Cancelar</Link>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddEmpresaComponent;