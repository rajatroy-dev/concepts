'''
In regex, negative lookahead is used to NOT match characters
'''

import re

pattern = "^(?![0-9]+)[A-Za-z]+$"
true_txt = "abcdABCD"
false_txt = "abcdABCD0123"

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))
