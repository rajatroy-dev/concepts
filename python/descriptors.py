class Celsius:
    def __get__(self, instance, owner):
        return (instance.fahrenheit - 32) * 5/9

    def __set__(self, instance, value):
        instance.fahrenheit = value * 9/5 + 32


class Temperature:
    celsius = Celsius()

    def __init__(self, fahrenheit) -> None:
        self.fahrenheit = fahrenheit


t = Temperature(212)
print(t.celsius)
t.celsius = 0
print(t.fahrenheit)
