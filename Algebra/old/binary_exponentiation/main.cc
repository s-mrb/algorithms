#include <iostream>
using namespace std;
signed long int be(int b, int e);

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
    signed long int re = be(base, exponent);
    cout << "Answer:" << re << "\n";
    }

    return 0;
}

