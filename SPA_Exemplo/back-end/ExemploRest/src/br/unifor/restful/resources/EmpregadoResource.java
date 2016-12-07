package br.unifor.restful.resources;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import br.unifor.restful.model.Departamento;
import br.unifor.restful.model.Empregado;
import br.unifor.restful.model.Estacionamento;
import br.unifor.restful.model.Projeto;

@Path("/empregados")
public class EmpregadoResource {

	static private Map<Integer, Empregado> empregadosMap;

	static {
		empregadosMap = new HashMap<Integer, Empregado>();

		Empregado e1 = new Empregado();
		e1.setId(1L);
		e1.setNome("Maria da Silva");
		e1.setEmail("maria@mail.com");
		e1.setDepartamento(new Departamento());
		e1.setProjetos(new ArrayList<Projeto>());
		e1.setEstacionamento(new Estacionamento());
		empregadosMap.put(e1.getId().intValue(), e1);

		Empregado e2 = new Empregado();
		e2.setId(2L);
		e2.setNome("João dos Santos");
		e2.setEmail("joao@mail.com");		
		e2.setDepartamento(new Departamento());
		e2.setProjetos(new ArrayList<Projeto>());
		e2.setEstacionamento(new Estacionamento());
		empregadosMap.put(e2.getId().intValue(), e2);

	}

	@GET
	@Produces("application/json")
	public Collection<Empregado> lista() {
		return new ArrayList<Empregado>(empregadosMap.values());
	}

	@GET
	@Path("{id}")
	@Produces("application/json")
	public Empregado busca(@PathParam("id") Long id) {
		System.out.println("ID: "+id);		
		return empregadosMap.get(id.intValue());
	}

	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String insere(Empregado empregadoVO) {
		empregadoVO.setId(empregadosMap.size() + 1L);
		empregadosMap.put(empregadoVO.getId().intValue(), empregadoVO);
		return "Empregado " + empregadoVO.getNome() + " adicionado.";

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