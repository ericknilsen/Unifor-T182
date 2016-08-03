package br.unifor.exemplo;

import br.unifor.filter.SimpleFilter;
import br.unifor.pipe.Pipe;

public class ExemploFilter extends SimpleFilter<Integer, String> {
    public ExemploFilter(Pipe<Integer> input, Pipe<String> output) {
        super(input, output);
    }

    @Override
    protected String transforma(Integer in) {
        String out = Integer.toString(in)+".0";
        System.out.println("Filtro: transforma de " + Integer.toString(in) + " para " + out);
        delayForDebug(100);
        return out;
    }
}