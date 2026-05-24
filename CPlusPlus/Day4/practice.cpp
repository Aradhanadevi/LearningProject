//maybe unused attribute 
//Today we will learn about the maybe_unused attribute in C++. The maybe_unused attribute is used to indicate that a variable, function, or parameter may not be used in the code. This can help to avoid compiler warnings about unused variables or functions.
#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    int b = 20;
    int c = a + b;
    cout << "The sum of a and b is: " << c << endl;
    return 0;
}