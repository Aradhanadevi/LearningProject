//Function declaration
#include <iostream>

using namespace std;

int add(int x, int y); //This is function delclartion

/* This type of function declartion you can keep the function defination 
after the main() function or even in other file.  */


int main(){

    cout << add(2, 4);
    return 0;

}

int add(int x, int y){  // This is called function defination
    return x + y;
}

