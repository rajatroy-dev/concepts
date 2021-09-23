#include <iostream>

using namespace std;

long long int power[] = {
    1000000000, // 10^9
    100000000,  // 10^8
    10000000,   // 10^7
    1000000,    // 10^6
    100000,     // 10^5
    10000,      // 10^4
    1000,       // 10^3
    100,        // 10^2
    10,         // 10^1
    1           // 10^0
};

int arr[10];

int *number_to_array(long long int number)
{
    long long int temp = number;

    for (int i = 9; i >= 0; i--)
    {
        arr[i] = temp % 10;
        temp /= 10;
    }

    return arr;
}

long long int swap_number(long long int number, int i, int j)
{
    int *arrayed_number = number_to_array(number);
    int diff = arrayed_number[j] - arrayed_number[i];
    long long int swaped_number = number + diff * (power[i] - power[j]);
    cout << swaped_number << endl;
    return swaped_number;
}

int main()
{
    long long int number = 7593120468;
    long long int swaped_number = swap_number(number, 0, 2);
    cout << number << endl;
    return 0;
}
