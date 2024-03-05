// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.

import java.util.Scanner;

public class Reverse{
    public static void main(String[] args){ 
        System.out.println("Enter a number: ");

        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        scanner.close();

        System.out.println("Number is " + num);
        
        int reverseNum = reverseInt(num);
        System.out.println("The reversed number is: " + reverseNum);
        
    }
    public static int reverseInt(int num){
        boolean isNegative = false;
        if(num < 0){
            isNegative = true;
            num = -num;
        }

        int reverseNum = 0;
        while(num > 0){
            int digit = num % 10;
            reverseNum = reverseNum * 10 + digit;
            num /= 10;
        }

        if(isNegative){
            reverseNum = -reverseNum;
        }
        return reverseNum;
    }
}