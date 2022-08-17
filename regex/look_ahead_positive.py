'''
In regex, look ahead positive is used to match characters after a few characters
look-ahead requires fixed-width pattern
'''

import re

pattern = "abcd(?=0123)" # Match the first abcd that has 0123 after it
true_txt = "abcd0123ABCD"
false_txt = "abcdABCD0123"

print(re.search(pattern, true_txt)) # abcd
print(re.search(pattern, false_txt))