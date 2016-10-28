package br.unifor.bean.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.ejb.Stateless;

import br.unifor.bean.EmpregadoBeanRemote;
import br.unifor.entity.Empregado;


@Stateless
public class EmpregadoBean implements EmpregadoBeanRemote {
	
	static private Map<Integer, Empregado> empregadosMap;

	static {
		empregadosMap = new HashMap<Integer, Empregado>();

		Empregado e1 = new Empregado();
		e1.setId(1L);
		e1.setNome("Maria da Silva");
		e1.setEmail("maria@mail.com");	
		empregadosMap.put(e1.getId().intValue(), e1);

		Empregado e2 = new Empregado();
		e2.setId(2L);
		e2.setNome("João dos Santos");
		e2.setEmail("joao@mail.com");	
	
		empregadosMap.put(e2.getId().intValue(), e2);

	}


	@Override
	public Collection<Empregado> lista() {
		// TODO Auto-generated method stub
		return new ArrayList<Empregado>(empregadosMap.values());
	}


	@Override
	public String insere(Empregado empregado) {
		empregado.setId(empregadosMap.size() + 1L);
		empregadosMap.put(empregado.getId().intValue(), empregado);
		return "Empregado " + empregado.getNome() + " adicionado.";
	}


	@Override
	public String remove(Long id) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Empregado busca(Long id) {
		System.out.println("ID: "+id);		
		return empregadosMap.get(id.intValue());
	}


	@Override
	public String altera(Empregado empregado) {
		// TODO Auto-generated method stub
		return null;
	}
}
