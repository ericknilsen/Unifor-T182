package br.unifor.pipe;

import java.io.IOException;
import java.util.LinkedList;
import java.util.NoSuchElementException;
import java.util.Queue;

public class PipeImpl<T> implements Pipe<T> {
    private Queue<T> buffer = new LinkedList<T>();
    private boolean abertoParaEscrita = true;
    private boolean leuUltimoObjeto = false;

    @Override
    public synchronized boolean insere(T obj) {
        if (!abertoParaEscrita) {
            throw new RuntimeException(new IOException("Pipe fechado; impossível escrever nele"));
        } else if (obj == null) {
            throw new IllegalArgumentException("Não é permitido inserir null no pipe; null é usado p/ indicar pipe vazio");
        }

        boolean foiAdicionado = buffer.add(obj);
        notify();
        
        return foiAdicionado;
    }

    @Override   
    public synchronized T proximoObjeto() throws InterruptedException {
        if (leuUltimoObjeto) {
            throw new NoSuchElementException("Pipe fechado ou vazio");
        }

        while (buffer.isEmpty()) {
            wait(); 
        }

        T obj = buffer.remove();
        if (obj == null) { 
        	leuUltimoObjeto = true;
        }
        return obj;
    }

    @Override
    public synchronized void fecha() {
    	abertoParaEscrita = false;
        buffer.add(null);
        notify();
    }
}