import axios from "axios";
//RUTA PARA ACCEDER A LA API con la URL
const EMPRESA_BASE_REST_API_URL = "http://localhost:8080/api/v1/empresa";


class EmpresaService {
    getAllEmpresas() {
        //obtener los datos de la ruta EMPRESA_BASE_REST_API_URL (listar los detos con el metodo GET)
        return axios.get(EMPRESA_BASE_REST_API_URL);
    }
    createEmpresa(empresa) {
        //crea los datos por el metodo post hacia el back desde el front
        return axios.post(EMPRESA_BASE_REST_API_URL, empresa);
    }

    getEmpresaById(id) {
        //obtiene los datos de la empresa y los carga en el front
        return axios.get(EMPRESA_BASE_REST_API_URL + '/' + id);
    }

    updateEmpresa(empresaId,empresa){
        return axios.put(EMPRESA_BASE_REST_API_URL+'/'+empresaId, empresa);
    }

    deleteEmpresa(empresaId){
        return axios.delete(EMPRESA_BASE_REST_API_URL+'/'+empresaId)
    }
}

const empresaServiceInstance = new EmpresaService();
export default empresaServiceInstance;