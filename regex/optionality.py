'''
In regex, we denote optionality using ? character
'''
import re

pattern = "Cats?"
true_txt_1 = "Cat"
true_txt_2 = "Cats"
false_txt = "Cas"

print(re.search(pattern, true_txt_1))
print(re.search(pattern, true_txt_2))
print(re.search(pattern, false_txt))
