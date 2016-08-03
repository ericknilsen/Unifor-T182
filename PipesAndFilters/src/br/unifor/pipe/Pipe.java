package br.unifor.pipe;

public interface Pipe<T> {
    public boolean insere(T obj);
    public T proximoObjeto() throws InterruptedException;
    public void fecha();
}