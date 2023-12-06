package Vaso;

import java.util.ArrayList;
import java.util.Scanner;

public class TesteVaso2 {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		//lista de vasos vazia
		ArrayList<Vaso> vasos = new ArrayList<>();
		for(int i = 0; i < 2; i++) {
			System.out.println("Digite a cor do vaso desejado" +" "+ (i + 1) + ":");
			String cor = entrada.nextLine();
			System.out.println("Digite a tamanho do vaso desejado" +" "+ (i + 1) + ":");
			 String tamanho = entrada.nextLine();
			System.out.println("Digite a material do vaso desejado" +" "+ (i + 1) + ":");
			 String material = entrada.nextLine();
			Vaso vasosDecorado;
			
			vasosDecorado = new VasoDecorado(cor);
			vasosDecorado = new VasoDecorado(tamanho);
			vasosDecorado = new VasoDecorado(material);
			
			vasos.add(vasosDecorado);
		}
			for(Vaso vasosDecorado: vasos) {
				System.out.println("Informacoes dos vasos: " + vasosDecorado.getCor());
		}
	}
}