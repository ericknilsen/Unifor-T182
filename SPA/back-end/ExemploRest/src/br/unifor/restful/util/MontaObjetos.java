package br.unifor.restful.util;

import java.util.ArrayList;
import java.util.Collection;

//import br.unifor.entity.Departamento;
//import br.unifor.entity.Empregado;
//import br.unifor.entity.Estacionamento;
//import br.unifor.entity.Projeto;
import br.unifor.restful.model.DepartamentoVO;
import br.unifor.restful.model.EmpregadoVO;
import br.unifor.restful.model.EstacionamentoVO;
import br.unifor.restful.model.ProjetoVO;

public final class MontaObjetos {

//	public static Empregado montaEmpregado(EmpregadoVO empregadoVO) {
//
//		Empregado empregado = new Empregado();
//		empregado.setId(empregadoVO.getId());
//		empregado.setNome(empregadoVO.getNome());
//		empregado.setEmail(empregadoVO.getEmail());
//		empregado.setProjetos(montaProjetos(empregadoVO.getProjetos()));
//		empregado.setDepartamento(montaDepartamento(empregadoVO
//				.getDepartamento()));
//		empregado.setEstacionamento(montaEstacionamento(empregadoVO.getEstacionamento()));
//
//		return empregado;
//	}
//	
//	public static EmpregadoVO montaEmpregadoVO(Empregado empregado) {
//
//		EmpregadoVO empregadoVO = new EmpregadoVO();
//		empregadoVO.setId(empregado.getId());
//		empregadoVO.setNome(empregado.getNome());
//		empregadoVO.setEmail(empregado.getEmail());
//		empregadoVO.setProjetos(montaProjetosVO(empregado.getProjetos()));
//		empregadoVO.setDepartamento(montaDepartamentoVO(empregado
//				.getDepartamento()));
//		empregadoVO.setEstacionamento(montaEstacionamentoVO(empregado.getEstacionamento()));
//
//		return empregadoVO;
//	}
//
//	public static Collection<EmpregadoVO> montaEmpregadosVO(
//			Collection<Empregado> listaEmpregados) {
//
//		Collection<EmpregadoVO> listaEmpregadosVO = new ArrayList<EmpregadoVO>();
//		for (Empregado empregado : listaEmpregados) {
//			listaEmpregadosVO.add(montaEmpregadoVO(empregado));
//		}
//
//		return listaEmpregadosVO;
//	}
//	
//
//	public static Departamento montaDepartamento(DepartamentoVO departamentoVO) {
//
//		Departamento departamento = new Departamento();
//		departamento.setId(departamentoVO.getId());
//		departamento.setNome(departamentoVO.getNome());
//		departamento.setCodigo(departamentoVO.getCodigo());
//
//		return departamento;
//	}
//
//	public static DepartamentoVO montaDepartamentoVO(Departamento departamento) {
//
//		DepartamentoVO departamentoVO = new DepartamentoVO();
//		departamentoVO.setId(departamento.getId());
//		departamentoVO.setNome(departamento.getNome());
//		departamentoVO.setCodigo(departamento.getCodigo());
//
//		return departamentoVO;
//	}
//	
//    public static Collection<DepartamentoVO> montaDepartamentosVO(Collection<Departamento> listaDepartamentos) {
//
//        Collection<DepartamentoVO> listaDepartamentosVO = new ArrayList<DepartamentoVO>();
//        for (Departamento departamento : listaDepartamentos) {
//        	listaDepartamentosVO.add(montaDepartamentoVO(departamento));            
//        }
//
//        return listaDepartamentosVO;
//    }
//
//	public static Projeto montaProjeto(ProjetoVO projetoVO) {
//
//		Projeto projeto = new Projeto();
//		projeto.setId(projetoVO.getId());
//		projeto.setNome(projetoVO.getNome());
//		projeto.setDescricao(projetoVO.getDescricao());
//
//		return projeto;
//	}
//
//	public static Collection<Projeto> montaProjetos(
//			Collection<ProjetoVO> listaProjetosVO) {
//
//		Collection<Projeto> listaProjetos = new ArrayList<Projeto>();
//		for (ProjetoVO projetoVO : listaProjetosVO) {
//			listaProjetos.add(montaProjeto(projetoVO));
//		}
//
//		return listaProjetos;
//	}
//
//	public static ProjetoVO montaProjetoVO(Projeto projeto) {
//
//		ProjetoVO projetoVO = new ProjetoVO();
//		projetoVO.setId(projeto.getId());
//		projetoVO.setNome(projeto.getNome());
//		projetoVO.setDescricao(projeto.getDescricao());
//
//		return projetoVO;
//	}
//
//	public static Collection<ProjetoVO> montaProjetosVO(
//			Collection<Projeto> listaProjetos) {
//
//		Collection<ProjetoVO> listaProjetosVO = new ArrayList<ProjetoVO>();
//		for (Projeto projeto : listaProjetos) {
//			listaProjetosVO.add(montaProjetoVO(projeto));
//		}
//
//		return listaProjetosVO;
//	}
//
//	public static Collection<EstacionamentoVO> montaEstacionamentosVO(
//			Collection<Estacionamento> listaEstacionamentos) {	
//		
//		Collection<EstacionamentoVO> listaEstacionamentosVO = new ArrayList<EstacionamentoVO>();
//		for (Estacionamento estacionamento : listaEstacionamentos) {		
//			listaEstacionamentosVO.add(montaEstacionamentoVO(estacionamento));
//		}		
//		
//		return listaEstacionamentosVO;
//	}
//
//	public static EstacionamentoVO montaEstacionamentoVO(Estacionamento estacionamento) {
//		
//		EstacionamentoVO estacionamentoVO = new EstacionamentoVO();
//		estacionamentoVO.setId(estacionamento.getId());
//		estacionamentoVO.setCodigo(estacionamento.getCodigo());
//		
//		return estacionamentoVO;
//	}
//
//	public static Estacionamento montaEstacionamento(
//			EstacionamentoVO estacionamentoVO) {
//		
//		Estacionamento estacionamento = new Estacionamento();
//		estacionamento.setId(estacionamentoVO.getId());
//		estacionamento.setCodigo(estacionamentoVO.getCodigo());		
//		
//		return estacionamento;
//	}



}
