'''
In regex, there can be nested capture groups
with priority from left to right
'''

import re

pattern = "([A-Za-z]+ ([0-9]+))"
txt = "Jan 1997"

result = re.search(pattern, txt)

print(result.groups())
print(result.group(0)) # match
print(result.group(1)) # 1st capture
print(result.group(2)) # 2nd capture
