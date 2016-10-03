package br.unifor.restful.resources;

import java.util.Collection;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import br.unifor.bean.DepartamentoBeanRemote;
import br.unifor.restful.model.DepartamentoVO;
import br.unifor.restful.util.MontaObjetos;


@Stateless
@Path("/departamentos")
public class DepartamentoResource {

    @EJB private DepartamentoBeanRemote departamentoBean;

    @GET
    @Produces("application/json")
    public Collection<DepartamentoVO> listaDepartamentos() {
    	
        return MontaObjetos.montaDepartamentosVO(departamentoBean.lista());         

    }
    
    @Path("{id}")
    @GET	
    @Produces("application/json")
	public DepartamentoVO buscaDepartamentoPorId(@PathParam("id") Long id) {    
    	return MontaObjetos.montaDepartamentoVO(departamentoBean.busca(id));
    }


    @POST
    @Consumes("application/json")
    @Produces("text/plain")
    public String adicionaDepartamento(DepartamentoVO departamentoVO) {

        return departamentoBean.adiciona(MontaObjetos.montaDepartamento(departamentoVO));
    }   

    @PUT
    @Consumes("application/json")
    @Produces("text/plain")
    public String alteraDepartamento(DepartamentoVO departamentoVO) {        

        return departamentoBean.altera(MontaObjetos.montaDepartamento(departamentoVO));
    }

    @Path("{id}")
    @DELETE 
    @Produces("text/plain")
    public String removeDepartamento(@PathParam("id") Long id) {       
        return departamentoBean.remove(id);
    }   

}