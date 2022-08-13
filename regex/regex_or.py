'''
In regex, we can choose one group of characters vs other using pipe "|".
'''
import re

pattern = "(?:[bc]+at|[df]+og)"
true_txt_1 = "bbcat"
false_txt = "log"

print(re.search(pattern, true_txt_1))
print(re.search(pattern, false_txt))
