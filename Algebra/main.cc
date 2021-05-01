#include <iostream>
using namespace std;
unsigned long int be(int b, int e);

int main()
{

    int base;
    int exponent;

    while(true){
            cout << "Please enter the base. \n";
    cin >> base;
    cout << "Please enter the exponent\n";
    cin >> exponent;

    cout << "Expression is: " << base << "^" << exponent << "\n";
    unsigned long int re = be(base, exponent);
    cout << "Answer:" << re << "\n";
    }

    return 0;
}

