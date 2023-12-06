package Vaso;

import java.util.Scanner;

public class TesteVaso {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		//instanciando obj
		Vaso vs1 = new Vaso();
		VasoDecorado vd1 = new VasoDecorado();
		//metodos
		//vaso sem decoração
		System.out.println("Vaso sem decoracao");
		System.out.println("Gostaria de qual cor?");
		vs1.setCor(entrada.next());
		System.out.println("Gostaria de qual tamanho? (em metros)");
		vs1.setTamanho(entrada.nextDouble());
		System.out.println("Gostaria de qual material?");
		vs1.setMaterial(entrada.next());
		vs1.exibir();
		System.out.println("\n");
		System.out.println("----------------------------");
		//vaso com decoração
		System.out.println("\n");
		System.out.println("Vaso com decoracao");
		System.out.println("Gostaria de qual cor?");
		vd1.setCor(entrada.next());
		System.out.println("Gostaria de qual tamanho? (em metros)");
		vd1.setTamanho(entrada.nextDouble());
		System.out.println("Gostaria de qual material?");
		vd1.setMaterial(entrada.next());
		System.out.println("Gostaria de alguma decoracao?");
		vd1.setDecoracao(entrada.next());
		vd1.exibir();
	}
}