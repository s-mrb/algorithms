# Open a file: file
file = open('./4157.txt',mode='r')
# file = open('./2.txt',mode='r')

 
# read all lines at once
text = file.read()
 
# close the file
file.close()

print(text)

import re
new_txt = re.sub(r"[\n\t\s]*", "", text)
# n = int(new_txt)
print(len(new_txt))