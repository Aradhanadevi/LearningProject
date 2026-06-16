/*Today we will learn about cout, cin, and endl also isostream */

#include <iostream> // this is the header file for input and output stream
using namespace std; // this is the namespace for standard library

int main() // this is the main function
{
    cout << "Hello World!" << endl; // this is the output statement
    cout << "Welcome to C++ programming!" << endl; // this is another output statement

    int age; // this is a variable declaration
    cout << "Enter your age: "; // this is an output statement
    cin >> age; // this is an input statement

    cout << "Your age is: " << age << endl; // this is an output statement

    //The endl flushes the output buffer and moves the cursor to the next line. It is equivalent to '\n' but also ensures that the output is displayed immediately.
    //Its is slower than '\n' because it flushes the output buffer, which can be time-consuming. Therefore, it is recommended to use '\n' instead of endl when you do not need to flush the output buffer.

    // \n is a newline character that moves the cursor to the next line. It does not flush the output buffer, so it is faster than endl. It is recommended to use '\n' instead of endl when you do not need to flush the output buffer.
    cout << "Your age is: " << age << '\n'; // this is an output statement using '\n'

    return 0; // this is the return statement


}