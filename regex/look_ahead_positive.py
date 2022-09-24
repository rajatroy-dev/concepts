'''
In regex, look ahead positive is used to match characters after a few characters
'''

import re

pattern = "[a-z]+(?=[0-9]+)" # Match the first abcd that has 0123 after it
true_txt = "abcd0123ABCD"
false_txt = "abcdABCD0123"

print(re.search(pattern, true_txt)) # abcd
print(re.search(pattern, false_txt))
