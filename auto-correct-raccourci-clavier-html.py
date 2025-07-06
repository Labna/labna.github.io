#!/bin/python3

import re

file="./raccourci_clavier.html"

with open(file, "r") as html:
    data = html.read()

    # replace the |html class| into actual code
    data = re.sub(r'>\|(\w{3,5})\|<', " / class=\"$1\"><",data)

    # remove the spaces between balises
    data = re.sub(r'i> <k', "i><k", data)

    # remove html comments
    data = re.sub(r'<!--(.|\n)*?-->', "", data)

    # remove too many spaces
    data = re.sub(r' {2,}', " ", data)

    # remove line breaks
    #data = re.sub(r'\n', "", data)

# add <!DOCTYPE html>
with open(file, "w") as html:
    html.write("<!DOCTYPE html>" + data)

