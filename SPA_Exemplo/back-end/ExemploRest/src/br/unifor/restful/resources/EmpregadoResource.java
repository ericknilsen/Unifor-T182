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

import br.unifor.bean.EmpregadoBeanRemote;
import br.unifor.restful.model.EmpregadoVO;
import br.unifor.restful.util.MontaObjetos;


@Stateless
@Path("/empregados")
public class EmpregadoResource {

    @EJB private EmpregadoBeanRemote empregadoBean;

    @GET
    @Produces("application/json")
    public Collection<EmpregadoVO> listaProjetos() {              

        return MontaObjetos.montaEmpregadosVO(empregadoBean.lista());         

    }
    
    @GET
	@Path("{id}")
    @Produces("application/json")
	public EmpregadoVO buscaProjetoPorId(@PathParam("id") Long id) {
    	return MontaObjetos.montaEmpregadoVO(empregadoBean.busca(id));
    }


    @POST
    @Consumes("application/json")
    @Produces("text/plain")
    public String adicionaProjeto(EmpregadoVO empregadoVO) {

        return empregadoBean.adiciona(MontaObjetos.montaEmpregado(empregadoVO));
    }   

    @PUT
    @Consumes("application/json")
    @Produces("text/plain")
    public String alteraProjeto(EmpregadoVO empregadoVO) {        

        return empregadoBean.altera(MontaObjetos.montaEmpregado(empregadoVO));
    }

    @Path("{id}")
    @DELETE 
    @Produces("text/plain")
    public String removeProjeto(@PathParam("id") Long id) {       
        return empregadoBean.remove(id);
    }   

}