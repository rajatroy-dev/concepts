class Circle:
    total_circle_count = 0

    def __init__(self, radius) -> None:
        self.radius = radius
        Circle.total_circle_count += 1

    def getCircleCount(self):
        return Circle.total_circle_count


circle1 = Circle(5)
circle2 = Circle(6)
circle3 = Circle(7)


print(circle1.getCircleCount())
print(circle2.getCircleCount())
print(Circle.getCircleCount(circle3)) # Called as class method so argument is required
print(Circle.getCircleCount()) # TypeError
