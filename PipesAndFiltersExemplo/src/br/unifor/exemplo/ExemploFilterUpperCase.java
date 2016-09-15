package br.unifor.exemplo;

import br.unifor.filter.SimpleFilter;
import br.unifor.pipe.Pipe;

public class ExemploFilterUpperCase extends SimpleFilter<String, String> {
    public ExemploFilterUpperCase(Pipe<String> input, Pipe<String> output) {
        super(input, output);
    }

    @Override
    protected String transforma(String in) {
        String out = in.toUpperCase();
        System.out.println("Filtro: transforma de " + in + " para " + out);
        delayForDebug(100);
        return out;
    }
}