class CustomException(Exception):
    def __init__(self, string):
        self.string = string

    def __str__(self):
        return self.string


try:
    a = "1"
    b = 1

    if not isinstance(b, str):
        raise CustomException("Not a string!")

    print("Your input: {}".format(b))
except CustomException as e:
    print(e)
