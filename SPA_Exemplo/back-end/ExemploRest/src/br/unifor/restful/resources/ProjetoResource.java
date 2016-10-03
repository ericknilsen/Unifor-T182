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

import br.unifor.bean.ProjetoBeanRemote;
import br.unifor.restful.model.ProjetoVO;
import br.unifor.restful.util.MontaObjetos;

@Stateless
@Path("/projetos")
public class ProjetoResource {

	@EJB
	private ProjetoBeanRemote projetoBean;

	@GET
	@Produces("application/json")
	public Collection<ProjetoVO> listaProjetos() {

		return MontaObjetos.montaProjetosVO(projetoBean.lista());

	}

	@Path("{id}")
	@GET
	@Produces("application/json")
	public ProjetoVO buscaProjetoPorId(@PathParam("id") Long id) {
		return MontaObjetos.montaProjetoVO(projetoBean.busca(id));
	}

	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String adicionaProjeto(ProjetoVO projetoVO) {

		return projetoBean.adiciona(MontaObjetos.montaProjeto(projetoVO));
	}

	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String alteraProjeto(ProjetoVO projetoVO) {

		return projetoBean.altera(MontaObjetos.montaProjeto(projetoVO));
	}

	@Path("{id}")
	@DELETE
	@Produces("text/plain")
	public String removeProjeto(@PathParam("id") Long id) {
		return projetoBean.remove(id);
	}

}