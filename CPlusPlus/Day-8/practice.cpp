#include <iostream>
/*Out of scope Vs going out of scope*/
using namespace std;

int getValuefromUser(){
    cout << "Enter: ";
    int input{};
    cin >> input;
    return input;
}

int main(){

    cout << getValuefromUser() << "\n";
    return 0;

}