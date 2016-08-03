package br.unifor.exemplo;

import br.unifor.datasink.DataSink;
import br.unifor.pipe.Pipe;

public class ExemploDataSink extends DataSink<String> {
    public ExemploDataSink(Pipe<String> input) {
        super(input);
    }

    @Override
    public void recebe(Pipe<String> pipe) {
        try {
            String in;
            while ((in = pipe.proximoObjeto()) != null) {
                System.out.println("Saída DataSink: "+in);
                System.out.println();
                delayForDebug(300);
            }
            System.out.println("DataSink finalizado");
        } catch (InterruptedException e) {
            System.err.println("Interrompido");
            e.printStackTrace();
        } finally {
            System.out.close();
        }
    }
}