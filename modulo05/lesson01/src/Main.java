import java.util.Scanner;

import com.sun.jdi.PathSearchingVirtualMachine;
import util.Utilitarios;



public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

//       byte byteVar = 127;
//       short shortVar = 32000;
//       float doubleVar = 1.344f;
//
//        System.out.println("byte: " + doubleVar);
//        Locale.setDefault(Locale.US);
//        System.out.println("short: "  + doubleVar);
//
//        String nome = sc.next();
//        System.out.println("Seu nome é: " + nome);
//
//
//        int idade = sc.nextInt();
//        System.out.println("Sua idade é: " + idade);
//
//        double ano = sc.nextInt();
//        System.out.println("Ano: " + ano);
//
//        char cararter = sc.next().charAt(0);
//        System.out.println("Char: " + cararter);


//        EXERCICIO 01 - CELSIUS TO FAHRENHEIT


//        System.out.println("Digite a temperatura em celsius");
//
//        double c = sc.nextDouble();
//
//        double fahrenheit = (c * 1.8) + 32;
//
//        System.out.println("A tenperatura em fahenheit é: " + fahrenheit);
//
////        ESTRUTURA CONDICIONAl
//
//        int idade = 18;
//        if(idade >= 18) {
//            System.out.println("Você é maior de idade");
//        } else {
//            System.out.println("Você é menor de idade");
//        }
//
////        EXERCÍCIO 02 - PAR OU IMPAR
//
//        System.out.println("Escolha um número");
//        int choiceNumber = sc.nextInt();
//
//        if (choiceNumber % 2 == 0) {
//            System.out.println("O número é par");
//        } else {
//            System.out.println("O número é impar");
//        }
//
//
////        Dia para dia SWITCH CASE
//
//        int dia = sc.nextInt();
//
//
//        switch (dia) {
//            case 1:
//                System.out.println("Domingo");
//                break;
//
//            case 2:
//                System.out.println("Segunda");
//                break;
//
//            case 3:
//            System.out.println("terça");
//            break;
//
//            default:
//                System.out.println("Dia inválido");
//                break;
//        }
//
////        EXERCÍCIO 03: Verifique se o ano é bissexto
//
//        System.out.print("Digite um ano: ");
//        int ano = sc.nextInt();
//        if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
//            System.out.println("O ano de " + ano + " é bissxeto");
//        } else {
//            System.out.println("O ano de " + ano + " não é bissexto");
//        }
//

//  EXERCÍCIO 04: Calculadora simples

//        System.out.print("Digite um número");
//        double num1 = sc.nextDouble();
//
//        System.out.println("Escolha a operação:\n  + | Soma\n  - | Subtração\n  * | Multiplicação\n  / | Divisão");
//        char op = sc.next().charAt(0);
//
//        System.out.print("Digite outro número");
//        double num2 = sc.nextDouble();
//
//        double result = 0;
//
//        switch (op) {
//            case '+':
//                result = num1 + num2;
//                break;
//            case '-':
//                result = num1 - num2;
//                break;
//            case '*':
//                result = num1 * num2;
//                break;
//            case '/':
//                result = num1 / num2;
//                break;
//            default:
//                System.out.println("Operaçao invalida");
//        }
//
//        System.out.println("Resultado: " + result);


//        Exercício 5: Simule um login que permite 3 trentativas

//        String defLogin = "123";
//        String defPassw = "123";
//
//        int tentativas = 0;
//        while(true) {
//
//            System.out.print("Login: ");
//            String login = sc.nextLine();
//
//            System.out.print("Password: ");
//            String password = sc.nextLine();
//
//            if(login.equals(defLogin) && password.equals(defPassw)) {
//                System.out.println("login efetuado com sucesso!");
//                break;
//            } else {
//                if(tentativas < 3) {
//                    System.out.println("login ou senha incorretos! Tente novamente");
//                    tentativas++;
//                } else {
//                    System.out.println("Você excedeu as tentativas, ACESSO BLOQUEADO");
//                }
//            }
//
//        }

//        ESTRUTURAS DE REPETIÇAO


//        for(int i = 0; i < 10; i++) {
//        System.out.println(i);
//    }


////        ARRAY
//        int[] vetor = new int[5];
//
//        vetor[0] = 1;
//        vetor[1] = 10;
//        vetor[2] = 20;
//        vetor[3] = 30;
//        vetor[4] = 40;
//
//
////        for (int i = 0; i < vetor.length; i++) {
////            System.out.println(vetor[i]);
//        }

//        int[] vetorInicializado = {1, 2, 3, 4, 5};
//
//        String[] palavras = {"teste"};
//
//        System.out.print(vetorInicializado[1]);
//
//        int sum = 0;
//        for (int i = 0; i < vetorInicializado.length; i++) {
//            sum += vetorInicializado[i];
//        }
//
//        int[] arrayPInverter = {1,2,3,4,5,6,7};
//
//        int tamanhoArray = arrayPInverter.length;
//
//        int[] arrayTemp = {};
//
//        for (int i = 0; i < vetor.length /2 ; i++) {
//            int x = vetor[i];
//            vetor[i] = vetor[vetor.length - 1 - i];
//            vetor[vetor.length - 1 - i] = x;
//        }
//
//
//
//        vetor.(1);

//        int[][] matrix = {
//                {1,2,3},
//                {4,5,6},
//                {7,8,9}
//        };
//
//        int sum = 0;
//        int countColun = 0;
//
//
//        int sumDiag = 0;
//        for(int[] row:matrix) {
//            int countRow = 0;
//            for(int value : row){
//                if(countRow == countColun) {
//                    sumDiag += value;
//                }
//                countRow++;
//            }
//            countColun++;
//        }
//
//
//        int sumDiagSec = 0;
//        for(int i = 0; i < matrix.length; i++) {
//            sumDiagSec += matrix[i][matrix.length - 1 - i];
//        }
//
//        int n = matrix.length;
//        int[][] matrixRot = new int[n][n];
//
//        for(int i = 0; i < n; i++) {
//            for(int j = 0; j < n; j++) {
//                matrixRot[j][n - 1 - i] = matrix[i][j];
//            }
//        }
//
//
//        for (int[] row : matrixRot) {
//            System.out.println(Arrays.toString(row));
//        }
//
//        int schdItem = 3;
//
//        for (int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j < matrix.length; j++){
//                if(matrix[i][j] == schdItem) {
//                    System.out.println("O item " + schdItem + " foi encontrado na posição ["+i+"]" + "[" + j + "]" );
//                }
//            }
//        }
//
//        System.out.println("DiagSec: " + sumDiagSec);
//        System.out.println("Diag: " + sumDiag);
//

        /*
        * [modificador] tipoRetorno nomeDoMétodo ([parâmetros){
        *   BLOCO DE CÓDIGO
        * }
        *
        * */

        Geometria geo = new Geometria();

        double area = geo.calcularArea(0.5, 3.0);

        System.out.println(area);

        ContaBancaria contaBancaria = new ContaBancaria();

        contaBancaria.depositar(10);

        System.out.println(contaBancaria.consultaSaldo());

        Utilitarios.print("Hello World!");


    }
}