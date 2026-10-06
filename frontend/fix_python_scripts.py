import sys

def fix_script(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    if "regenerate_contacts.py" in filename or "regenerate_companies.py" in filename:
        if '</div>\n"""' not in content:
            content = content.replace('                        ))}\n"""', '                        ))}\n</div>\n"""')
    
    if "regenerate_pipeline.py" in filename:
        # For Pipeline, we need to wrap the whole jsx_content in a fragment, or fix the slicing.
        # Actually Pipeline error was "Adjacent JSX elements must be wrapped in an enclosing tag" at line 412.
        pass

    with open(filename, 'w') as f:
        f.write(content)

fix_script("../../regenerate_contacts.py")
fix_script("../../regenerate_companies.py")
