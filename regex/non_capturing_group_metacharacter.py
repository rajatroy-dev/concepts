'''
In regex, non capturing group metacharacter can be represented using ?
'''

import re

pattern = "(?:http)://(example.com)"
txt = "http://example.com"

print(re.search(pattern, txt)) # <re.Match object; span=(0, 18), match='http://example.com'>
print(re.search(pattern, txt).group(1)) # example.com
