package br.unifor.bean;

import java.util.Collection;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import br.unifor.dao.ProjetoDAO;
import br.unifor.entity.Projeto;

/**
 * Session Bean implementation class AlunoBean
 */
@Stateless
public class ProjetoBean implements ProjetoBeanRemote {

    @EJB
    private ProjetoDAO projetoDAO;

    public ProjetoBean() {

    }

	@Override
	public Collection<Projeto> lista() {
		
		return this.projetoDAO.lista();
	}

	@Override
	public String adiciona(Projeto projeto) {
		
		return this.projetoDAO.insere(projeto);
	}

	@Override
	public String remove(Long id) {
		
		return this.projetoDAO.remove(id);
	}

	@Override
	public String altera(Projeto projeto) {
		
		return this.projetoDAO.altera(projeto);
	}

	@Override
	public Projeto busca(Long id) {
		
		return this.projetoDAO.busca(id);
	}    


}