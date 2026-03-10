import re
import glob

with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract header from index.html
match = re.search(r'<header class="site-header">.*?</header>', index_content, re.DOTALL)
if match:
    header_html = match.group(0)
else:
    print("Could not find header in index.html")
    exit(1)

html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace existing header with new header
    new_content = re.sub(r'<header class="site-header">.*?</header>', header_html, content, flags=re.DOTALL)
    
    # Ensure script.js is right before </body>, not multiple times
    new_content = re.sub(r'<script\s+src="script\.js"\s*></script>\s*(?=</body>)', '', new_content)
    new_content = new_content.replace('</body>', '    <script src="script.js"></script>\n</body>')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {file}")
