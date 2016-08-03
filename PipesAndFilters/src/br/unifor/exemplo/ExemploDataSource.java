package br.unifor.exemplo;

import br.unifor.datasource.DataSource;
import br.unifor.pipe.Pipe;

public class ExemploDataSource extends DataSource<Integer> {
    public ExemploDataSource(Pipe<Integer> output) {
        super(output);
    }

    @Override
    public void gerarDados(Pipe<Integer> pipe) {
        for (int i = 1; i <= 10; i++) {
            pipe.insere(new Integer(i));
            System.out.println("DataSource gerou: " + Integer.toString(i));            
            delayForDebug(200);
        }
        pipe.fecha();
        System.out.println("Datasource finalizado");
    }
}