from itertools import permutations, combinations

print("----- Permutations -----")
perm = list(permutations([1, 2, 3]))
print(perm)
print("------------------------")

print("----- Combinations -----")
comb = list(combinations([1, 2, 3, 4], 3))
print(comb)
print("------------------------")
