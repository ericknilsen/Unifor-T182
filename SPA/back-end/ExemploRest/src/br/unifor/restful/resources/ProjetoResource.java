package br.unifor.restful.resources;

import java.util.ArrayList;
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
import br.unifor.entity.Projeto;
import br.unifor.restful.model.ProjetoVO;


@Stateless
@Path("/projetos")
public class ProjetoResource {

    @EJB private ProjetoBeanRemote projetoBean;

    private Projeto montaProjeto(ProjetoVO projetoVO) {

    	Projeto projeto = new Projeto();
        projeto.setId(projetoVO.getId());
        projeto.setNome(projetoVO.getNome());
        projeto.setDescricao(projetoVO.getDescricao());
      
        return projeto;
    }

    private ProjetoVO montaProjetoVO(Projeto projeto) {

    	ProjetoVO projetoVO = new ProjetoVO();
    	projetoVO.setId(projeto.getId());
    	projetoVO.setNome(projeto.getNome());
    	projetoVO.setDescricao(projeto.getDescricao());      

        return projetoVO;
    }

    private Collection<ProjetoVO> montaProjetosVO(Collection<Projeto> listaProjetos) {

        Collection<ProjetoVO> listaProjetosVO = new ArrayList<ProjetoVO>();
        for (Projeto projeto : listaProjetos) {
        	listaProjetosVO.add(this.montaProjetoVO(projeto));            
        }

        return listaProjetosVO;
    }

    @GET
    @Produces("application/json")
    public Collection<ProjetoVO> listaProjetos() {              

        return this.montaProjetosVO(projetoBean.lista());         

    }
    
    @GET
	@Path("{id}")
    @Produces("application/json")
	public ProjetoVO buscaProjetoPorId(@PathParam("id") Long id) {
    	return this.montaProjetoVO(projetoBean.busca(id));
    }


    @POST
    @Consumes("application/json")
    @Produces("text/plain")
    public String adicionaProjeto(ProjetoVO projetoVO) {

        return projetoBean.adiciona(montaProjeto(projetoVO));
    }   

    @PUT
    @Consumes("application/json")
    @Produces("text/plain")
    public String alteraProjeto(ProjetoVO projetoVO) {        

        return projetoBean.altera(montaProjeto(projetoVO));
    }

    @Path("{id}")
    @DELETE 
    @Produces("text/plain")
    public String removeProjeto(@PathParam("id") Long id) {       
        return projetoBean.remove(id);
    }   

}