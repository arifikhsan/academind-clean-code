class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Rectangle:
    def __init__(self, starting_point, width, length):
        self.starting_point = starting_point
        self.width = width
        self.length = length

    def count_area(self):
        return self.width * self.length

    def print_end_points(self):
        top_right = self.starting_point.x + self.width
        bottom_left = self.starting_point.y + self.length
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def create_rectangle():
    starting_point = Point(50, 100)
    rectangle = Rectangle(starting_point, 90, 10)

    return rectangle


my_rectangle = create_rectangle()

print(my_rectangle.count_area())
my_rectangle.print_end_points()
