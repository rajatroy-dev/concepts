'''
In regex, start of a line is denoted by ^
and end of a line is denoted by $
'''

import re

pattern = "^The quick brown fox jumps over the lazy dog$"
true_txt = "The quick brown fox jumps over the lazy dog"
false_txt = "The quick brown fox jumps over the lazy dog."

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))