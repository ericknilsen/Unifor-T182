package br.unifor.datasource;

import br.unifor.exemplo.GeradorDeThreads;
import br.unifor.pipe.Pipe;

public abstract class DataSource<T> extends GeradorDeThreads {
    protected Pipe<T> output;

    public DataSource(Pipe<T> output) {
        this.output = output;
    }

    @Override
    public void run() {
    	gerarDados(output);
    }

    public abstract void gerarDados(Pipe<T> pipe);
}