from abc import ABC, abstractmethod


class A(ABC):
    @abstractmethod
    def m1(self):
        print("In class A, method m1")


class B(A):
    @staticmethod
    def m1(self):
        print("In class B, method m1")


b = B() # default init. No need to declare explicitly
B.m1(b) # print In class B, method m1
