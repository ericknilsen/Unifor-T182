package br.unifor.exemplo;

public abstract class GeradorDeThreads implements Runnable {
	private boolean isStarted = false;

    @Override
    abstract public void run();

	public void start(){
	    if(!isStarted){
	        isStarted = true;
	        Thread thread = new Thread(this);
	        thread.start();
	      }
	}

	public void stop(){
		isStarted = false;
	}
 
    protected void delayForDebug(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}