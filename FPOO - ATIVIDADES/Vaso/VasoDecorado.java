package Vaso;

public class VasoDecorado extends Vaso{
	//atributos
	private String decoracao;
	//construtor
	public VasoDecorado() {
		
	}
	public VasoDecorado(String decoracao) {
		this.decoracao = decoracao;
	}
	//get e set
	public String getDecoracao() {
		return decoracao;		
	}
	public void setDecoracao(String decoracao){
		this.decoracao = decoracao;
	}
	//metodo
	@Override
	public void exibir() {
		super.exibir();
		System.out.println("Decoracao: " + decoracao );
	}
}