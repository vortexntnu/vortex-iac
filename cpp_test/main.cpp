#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int sub(int a, int b) {
    return a - b;
}

int mul(int a, int b) {
    return a * b;
}

int main() {
    int res_add = add(3, 4);
    int res_sub = sub(4, 1);
    int res_mul = mul(2, 4);

    cout << "Res add: " << res_add << "\n";
    cout << "Res sub: " << res_sub << "\n";
    cout << "Res mul: " << res_mul << "\n";

    return 0;
}