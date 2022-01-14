#include <iostream>

using namespace std;

template <class T>
class Arithmetic
{
private:
    T a;
    T b;

public:
    Arithmetic(T a, T b)
    {
        this->a = a;
        this->b = b;
    }

    T add()
    {
        return this->a + this->b;
    }

    T sub()
    {
        return this->a - this->b;
    }
};

int main()
{
    Arithmetic<double> ar(10.5, 9.3);
    cout << ar.add() << endl;
    cout << ar.sub() << endl;

    return 0;
}