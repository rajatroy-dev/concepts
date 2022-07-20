from itertools import accumulate

a_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]  # 1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4 ...

list_one = accumulate(a_list)
print(' '.join(str(x) for x in list_one))

list_two = accumulate(a_list, lambda x, y: x * y)  # 1, 1 * 2, 1 * 2 * 3, 1 * 2 * 3 * 4 ...
print(' '.join(str(x) for x in list_two))
