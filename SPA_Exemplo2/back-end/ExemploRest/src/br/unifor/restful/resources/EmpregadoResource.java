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
import br.unifor.entity.Empregado;

@Stateless
@Path("/empregados")
public class EmpregadoResource {

	@EJB
	private EmpregadoBeanRemote empregadoBean;	
	
	@GET
	@Produces("application/json")
	public Collection<Empregado> lista() {
		return empregadoBean.lista();
	}

	@GET
	@Path("{id}")
	@Produces("application/json")
	public Empregado busca(@PathParam("id") Long id) {
		return empregadoBean.busca(id);
	}

	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String insere(Empregado empregadoVO) {
		return empregadoBean.insere(empregadoVO);
	}

	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String altera(Empregado empregadoVO) {

		return null;
	}

	@Path("{id}")
	@DELETE
	@Produces("text/plain")
	public String remove(@PathParam("id") Long id) {
		return null;
	}

}