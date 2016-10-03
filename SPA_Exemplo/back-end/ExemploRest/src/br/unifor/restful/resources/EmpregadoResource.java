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

import br.unifor.restful.model.DepartamentoVO;
import br.unifor.restful.model.EmpregadoVO;
import br.unifor.restful.model.EstacionamentoVO;
import br.unifor.restful.model.ProjetoVO;

@Path("/empregados")
public class EmpregadoResource {

	static private Map<Integer, EmpregadoVO> empregadosMap;

	static {
		empregadosMap = new HashMap<Integer, EmpregadoVO>();

		EmpregadoVO e1 = new EmpregadoVO();
		e1.setId(1L);
		e1.setNome("Maria da Silva");
		e1.setEmail("maria@mail.com");
		e1.setDepartamento(new DepartamentoVO());
		e1.setProjetos(new ArrayList<ProjetoVO>());
		e1.setEstacionamento(new EstacionamentoVO());
		empregadosMap.put(e1.getId().intValue(), e1);

		EmpregadoVO e2 = new EmpregadoVO();
		e2.setId(2L);
		e2.setNome("João dos Santos");
		e2.setEmail("joao@mail.com");		
		e2.setDepartamento(new DepartamentoVO());
		e2.setProjetos(new ArrayList<ProjetoVO>());
		e2.setEstacionamento(new EstacionamentoVO());
		empregadosMap.put(e2.getId().intValue(), e2);

	}

	@GET
	@Produces("application/json")
	public Collection<EmpregadoVO> lista() {
		return new ArrayList<EmpregadoVO>(empregadosMap.values());
	}

	@GET
	@Path("{id}")
	@Produces("application/json")
	public EmpregadoVO busca(@PathParam("id") Long id) {
		System.out.println("ID: "+id);		
		return empregadosMap.get(id.intValue());
	}

	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String insere(EmpregadoVO empregadoVO) {
		empregadoVO.setId(empregadosMap.size() + 1L);
		empregadosMap.put(empregadoVO.getId().intValue(), empregadoVO);
		return "Empregado " + empregadoVO.getNome() + " adicionado.";

	}

	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String altera(EmpregadoVO empregadoVO) {

		return null;
	}

	@Path("{id}")
	@DELETE
	@Produces("text/plain")
	public String remove(@PathParam("id") Long id) {
		return null;
	}

}