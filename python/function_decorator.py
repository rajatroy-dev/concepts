def decorator(func):
    def wrapper(*args, **kwds):
        print("----- Start: Function decorator -----")
        func(*args, **kwds)
        print("----- End: Function decorator -----")

    return wrapper


@decorator
def person_details(name="Anonymous", age=100):
    print("{} is {} years old.".format(name, age))


person_details("Debra P. Shue", 21)
