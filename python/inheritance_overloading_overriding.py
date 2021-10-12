class Animal:
    def voice(self):
        pass

    def family(self):
        pass


class Dog(Animal):
    def voice(self):
        return "Bark!"

    def family(self):
        return "Canidae!"

    # Class method overloading not allowed in Python
    # def family(self, ancestor):
    #     return "Canidae. Ancestor: " + ancestor


d = Dog()
print(d.voice())
print(d.family())
# print(d.family("Wolf!"))


# def product(a, b):
#     return a * b

# Only latest definition of overloaded method is called
def product(a, b, c):
    return a * b * c


# print(product(2, 3))
print(product(2, 3, 4))
