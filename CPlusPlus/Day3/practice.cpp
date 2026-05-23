/*Today we will learn about how to initilize varabiles in C++*/

//There are several ways to declare a varible and initlize the value to it.



#include <iostream>
using namespace std;

int main(){

    //No initilization
    int ex1; //Here we are not initlizing the value of the varible so it will be given a garbage value

    //Copy Initilization 
    //These are traditional initilizing methods
    int ex2 = 10; //Here we are inilizing the value or we can say we are copying it in the var to the right.


    //Direct Initilizing
    int ex3(64); //Here we are directly initlizing the value insted of using = operatot

    //Direct - list - initilization
    int ex4{6}; //These is also mordern technique to initilize the variable

    //Value initilization
    int ex5{}; //This can be used to take inputs, by default it will be zero

    //You can also initilize variable like this too but it is not used much.
    int ex6 = {5};

    //Lets print all the vars
    cout << ex1 << endl;
    cout << ex2 << endl;
    cout << ex3 << endl;
    cout << ex4 << endl;
    cout << ex5 << endl;
    cout << ex6 << endl;
      


    return 0;
}
