package br.unifor.datasink;

import br.unifor.exemplo.GeradorDeThreads;
import br.unifor.pipe.Pipe;

public abstract class DataSink<T> extends GeradorDeThreads {
    protected Pipe<T> input;

    public DataSink(Pipe<T> input) {
        this.input = input;
    }

    @Override
    public void run() {
    	recebe(input);
    }

    public abstract void recebe(Pipe<T> pipe);
}