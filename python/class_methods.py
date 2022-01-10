'''
classmethods belong to the class and can be used
to create constructors
'''

class Rectangle:
    def __init__(self, length, breadth) -> None:
        self.length = length
        self.breadth = breadth

    def calculate_area(self):
        return self.length * self.breadth

    @classmethod
    def square(cls, length):
        return cls(length, length)

rectangle = Rectangle(4, 5)
print("Area of rectangle: {}".format(rectangle.calculate_area()))

square = Rectangle.square(5)
print("Area of square: {}".format(square.calculate_area()))