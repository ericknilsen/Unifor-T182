package br.unifor.filter;

import br.unifor.pipe.Pipe;

public abstract class SimpleFilter<I, O> extends Filter<I, O> {
	
    public SimpleFilter(Pipe<I> input, Pipe<O> output) {
        super(input, output);
    }

    @Override
    protected void transformaDados(Pipe<I> input, Pipe<O> output) {
        try {
            I in;
            while ((in = input.proximoObjeto()) != null) {
                O out = transforma(in);
                output.insere(out);
            }
        } catch (InterruptedException e) {            
            System.err.println("Interrompido");
            e.printStackTrace();
            return;
        }
        output.fecha();
    }

    protected abstract O transforma(I in);
}