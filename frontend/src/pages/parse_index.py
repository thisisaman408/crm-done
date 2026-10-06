import re

with open("../../html_template/index.html", "r") as f:
    content = f.read()

# Extract content div
start = content.find('<div class="content">')
if start != -1:
    end = content.find('<!-- /Page Wrapper -->', start)
    if end == -1:
        end = content.rfind('</div>', start, start + 50000)
    print(content[start:start+4000])
else:
    print("Could not find <div class='content'>")

