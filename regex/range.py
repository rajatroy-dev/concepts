'''
In regex, range is specified using {start,end} after the character
'''

import re

pattern = ".{6,10}" # Take note that there is no space between , and 10
true_txt = "123456"
false_txt = "12345"

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))