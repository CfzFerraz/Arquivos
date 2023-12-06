package Vaso;

public class Vaso {
	//atributos
	private String cor;
	private double tamanho;
	private String material;
	//construtor
	public Vaso() {
		
	}
	public Vaso(String cor, double tamanho,String material ) {
		this.cor = cor;
		this.tamanho = tamanho;
		this.material = material;
	}
	//get e set
	public String getCor() {
		return cor;		
	}
	public void setCor(String cor){
		this.cor = cor;
	}
	public double getTamanho() {
		return tamanho;		
	}
	public void setTamanho(double tamanho){
		this.tamanho = tamanho;
	}
	public String getMaterial() {
		return material;		
	}
	public void setMaterial(String material){
		this.material = material;
	}
	//metodo
	public void exibir() {
		System.out.println("Cor do vaso: " + cor + "\nTamanho:" + tamanho + "\nMaterial: " + material);
	}
}