class class_decorator:
    def __init__(self, func) -> None:
        self.func = func

    def __call__(self, *args, **kwds):
        print("----- Start class_decorator -----")
        self.func(*args, **kwds)
        print("----- End class_decorator -----")


@class_decorator
def person_details(name="Anonymous", age=100):
    print("{} is {} years old.".format(name, age))


person_details("Debra P. Shue", 21)
