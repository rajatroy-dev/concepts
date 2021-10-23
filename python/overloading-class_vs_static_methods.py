class A:
    @staticmethod
    def method(self):
        print("Staticmethod!")

    @classmethod
    def method(self): # Method overloading not supported. Only the latest method is considered
        print("Classmethod!")


A.method()
