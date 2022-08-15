'''
In regex, negative lookahead is used to NOT match characters before
the given characters
'''

import re

pattern = "[A-Za-z]+(?![0-9]+)"
true_txt = "0123abcdABCD" # Match the first [A-Za-z]+ that doesn't have 0123 behind it
false_txt = "D0123"

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))
