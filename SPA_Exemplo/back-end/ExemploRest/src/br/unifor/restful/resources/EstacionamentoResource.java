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

import br.unifor.bean.EstacionamentoBeanRemote;
import br.unifor.bean.ProjetoBeanRemote;
import br.unifor.restful.model.EstacionamentoVO;
import br.unifor.restful.model.ProjetoVO;
import br.unifor.restful.util.MontaObjetos;

@Stateless
@Path("/estacionamentos")
public class EstacionamentoResource {

	@EJB
	private EstacionamentoBeanRemote estacionamentoBean;

	@GET
	@Produces("application/json")
	public Collection<EstacionamentoVO> listaProjetos() {

		return MontaObjetos.montaEstacionamentosVO(estacionamentoBean.lista());

	}

	@Path("{id}")
	@GET
	@Produces("application/json")
	public EstacionamentoVO buscaEstacionamentoPorId(@PathParam("id") Long id) {
		return MontaObjetos.montaEstacionamentoVO(estacionamentoBean.busca(id));
	}

	@POST
	@Consumes("application/json")
	@Produces("text/plain")
	public String adicionaEstacionamento(EstacionamentoVO estacionamentoVO) {

		return estacionamentoBean.adiciona(MontaObjetos.montaEstacionamento(estacionamentoVO));
	}

	@PUT
	@Consumes("application/json")
	@Produces("text/plain")
	public String alteraEstacionamento(EstacionamentoVO estacionamentoVO) {

		return estacionamentoBean.altera(MontaObjetos.montaEstacionamento(estacionamentoVO));
	}

	@Path("{id}")
	@DELETE
	@Produces("text/plain")
	public String removeEstacionamento(@PathParam("id") Long id) {
		return estacionamentoBean.remove(id);
	}

}