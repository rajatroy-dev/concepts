'''
In regex, look behind positive is used to match characters before a few characters
look-behind requires fixed-width pattern
'''

import re

pattern = "(?<=0123)ABCD" # Match the first ABCD that has 0123 before it
true_txt = "abcd0123ABCD"

print(re.search(pattern, true_txt)) # ABCD
