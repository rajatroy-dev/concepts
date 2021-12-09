a_list = [1, 2, 3, 4, 5, 6]


def double(x):
    return x*2


print("----- Defined funtion -----")
print(list(map(double, a_list)))

print("----- Lambda function -----")
print(list(map(lambda x: x**2, a_list)))
