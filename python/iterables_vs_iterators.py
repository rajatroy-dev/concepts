a_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# An object can be iterated over with "for" if it implements
# __iter__() or __getitem__().
for i in a_list:
    print(i)

print(a_list.__iter__)
print(a_list.__getitem__)
# print(a_list.__next__) list doesn't implement __next__

# create an iterator by passing an iterable to iter()
# iterator must implement __iter__ and __next__ special methods
# An object can function as an iterator if it implements next().
iter_a_list = iter(a_list)

print(iter_a_list.__iter__)
print(iter_a_list.__next__)
# print(iter_a_list.__getitem__) list_iterator doesn't implement __getitem__

print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))
print(next(iter_a_list))

print(next(iter_a_list))  # StopIteration
