package br.unifor.filter;

import br.unifor.exemplo.GeradorDeThreads;
import br.unifor.pipe.Pipe;

public abstract class Filter<I, O> extends GeradorDeThreads {
	protected Pipe<I> input;
	protected Pipe<O> output;

	public Filter(Pipe<I> input, Pipe<O> output) {
		this.input = input;
		this.output = output;
	}

	@Override
	public void run() {
		transformaDados(input, output);
	}

	protected abstract void transformaDados(Pipe<I> input, Pipe<O> output);
}