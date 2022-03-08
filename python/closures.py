def outer(a):
    print('Outer: {}'.format(a))
    c = 1

    def inner(b):
        print('Inner: {}'.format(b))
        d = a * b
        print('a x b: {}'.format(d))
        print('c: {}'.format(c))
        return d

    return inner

# outer is a higher-order function
# outer returns inner
# return value of inner depends on the arguments passed to outer
# This is closure


closureOne = outer(3)  # Is a closure
closureTwo = outer(4)  # Is a closure

print(closureOne(5))
print(closureTwo(5))
