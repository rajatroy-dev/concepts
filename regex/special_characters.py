'''
In regex, \s represents space, \t represents tab, \n represents new line, \r represents carriage return
'''

import re

pattern_space = "\s" # Take note that there is no space between , and 10
pattern_tab = "\t" # Take note that there is no space between , and 10
pattern_new_line = "\n" # Take note that there is no space between , and 10
pattern_carriage_return = "\r" # Take note that there is no space between , and 10
true_txt_space = " "
true_txt_tab = "	"
true_txt_new_line = '''
'''
true_txt_carriage_return = "\r"
false_txt = "12345"

print(re.search(pattern_space, true_txt_space))
print(re.search(pattern_tab, true_txt_tab))
print(re.search(pattern_new_line, true_txt_new_line))
print(re.search(pattern_carriage_return, true_txt_carriage_return))
print(re.search(pattern_space, false_txt))
print(re.search(pattern_tab, false_txt))
print(re.search(pattern_new_line, false_txt))
print(re.search(pattern_carriage_return, false_txt))