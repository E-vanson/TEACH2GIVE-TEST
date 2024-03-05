/*Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.*/

#include <iostream>
using namespace std;

bool isPowerOfTwo(int number);
int main(){
    int num;

    cout << "Enter your num:";
    cin >> num;
    cout << "\n The number entered is: "<< num;

    if(isPowerOfTwo(num)){
        cout << "\nIt is a power of two. \ntrue" << endl;
        return 0;
    }else{
        cout << "\nIt is not a power of two. \nfalse" << endl;
        return 1;
    }
}

bool isPowerOfTwo(int number){
        if(number <= 0){
            return false;
        }

        return (number & (number - 1)) == 0;
    }

