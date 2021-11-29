def decorator(func):
    def wrapper(*args, **kwargs):
        print("----- Function Decorators -----")
        func(*args, **kwargs)
        print("------------- End -------------")

    return wrapper


@decorator
def a_func(token=1):
    print(token)


a_func()
