package br.unifor.exemplo;

import br.unifor.datasink.DataSink;
import br.unifor.datasource.*;
import br.unifor.filter.Filter;
import br.unifor.pipe.Pipe;
import br.unifor.pipe.PipeImpl;

public class Principal {
    public static void main(String[] args) {
        // Cria os pipes
        final Pipe<Integer> pipeDataSource = new PipeImpl<Integer>();
        final Pipe<String> pipeDataSink = new PipeImpl<String>();

        // Cria os componentes que usam os pipes
        final DataSource<Integer> dataSource = new ExemploDataSource(pipeDataSource);
        final Filter<Integer, String> filter = new ExemploFilter(pipeDataSource, pipeDataSink);
        final DataSink<String> dataSink = new ExemploDataSink(pipeDataSink);

        // Inicia todos os componentes
        dataSource.start();
        filter.start();
        dataSink.start();
        
    }
}