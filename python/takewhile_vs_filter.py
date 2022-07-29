from itertools import takewhile

a_list = [2, 4, 6, 7, 8, 10]

takewhile_list = takewhile(lambda x: x % 2 == 0, a_list) # Stops after the first false
filter_list = filter(lambda x: x % 2 == 0, a_list) # Continues till the end of list

print("After takewhile: {}".format(list(takewhile_list)))
print("After filter: {}".format(list(filter_list)))
