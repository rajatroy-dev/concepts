'''
In regex, kleene plus represents one or more characters
'''

import re

pattern = "d.+"
true_txt = "dewr23rfs"
false_txt = "d"

print(re.search(pattern, true_txt))
print(re.search(pattern, false_txt))