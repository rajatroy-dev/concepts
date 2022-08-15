'''
In regex, negative lookahead is used to NOT match characters after
the given characters
look-behind requires fixed-width pattern
'''

import re

pattern = "(?<!0123)[A-Za-z]+"
true_txt = "abcdABCD0123" # Match the first [A-Za-z]+ that doesn't have 0123 ahead of it
false_txt = "0123a"

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))
