class Person:

    def __init__(self, _name, _age) -> None:
        # RecursionError: maximum recursion depth exceeded
        # Why? Because property name is same
        # self.name = _name
        # self.age = _age
        self._name = _name
        self._age = _age

    @property
    def name(self, _name):
        self._name = _name

    @property
    def age(self, _age):
        self._age = _age

    @name.setter
    def name(self, _newname):
        self._name = _newname

    @age.setter
    def age(self, _newage):
        self._age = _newage

    @name.getter
    def name(self):
        return self._name

    @age.getter
    def age(self):
        return self._age

    @name.deleter
    def name(self):
        self._name = None

    @age.deleter
    def age(self):
        self._age = None


person = Person("Rajat", 85)
print(person.name)
print(person.age)

person.name = "Rajeev"
person.age = 35
print(person.name)
print(person.age)

del person.name
del person.age
print(person.name)
print(person.age)