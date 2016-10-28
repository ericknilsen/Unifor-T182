package br.unifor.bean;

import java.util.Collection;

import javax.ejb.Remote;

import br.unifor.entity.Empregado;

@Remote
public interface EmpregadoBeanRemote {

    public Collection<Empregado> lista();
    public String insere(Empregado empregado);
    public String remove(Long id);    
    public Empregado busca(Long id);
    public String altera(Empregado empregado);
}
