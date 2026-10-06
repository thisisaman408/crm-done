import json
import os

transcript_path = '/Users/thisisaman408/.gemini/antigravity-ide/brain/febecc2b-2165-4b37-92f1-9fe65b365760/.system_generated/logs/transcript_full.jsonl'
output_dir = 'recovery'
os.makedirs(output_dir, exist_ok=True)

files_state = {}

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
        except:
            continue
            
        step = entry.get('step_index', 999999)
        if step >= 2499:
            break
            
        if 'tool_calls' in entry:
            for call in entry['tool_calls']:
                if call['name'] == 'write_to_file':
                    args = call.get('args', {})
                    path = args.get('TargetFile')
                    content = args.get('CodeContent')
                    if path and content:
                        files_state[path] = content
                        
                elif call['name'] == 'replace_file_content':
                    args = call.get('args', {})
                    path = args.get('TargetFile')
                    if path and path in files_state:
                        # Simple replacement approximation for exact target string
                        target = args.get('TargetContent')
                        replacement = args.get('ReplacementContent')
                        if target and replacement:
                            files_state[path] = files_state[path].replace(target, replacement)
                            
                elif call['name'] == 'multi_replace_file_content':
                    args = call.get('args', {})
                    path = args.get('TargetFile')
                    if path and path in files_state:
                        chunks = args.get('ReplacementChunks', [])
                        for chunk in chunks:
                            target = chunk.get('TargetContent')
                            replacement = chunk.get('ReplacementContent')
                            if target and replacement:
                                files_state[path] = files_state[path].replace(target, replacement)

for path, content in files_state.items():
    if 'src/pages/' in path or 'src/components/' in path:
        rel_path = path.split('app/frontend/')[1]
        out_path = os.path.join(output_dir, rel_path)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, 'w') as f:
            f.write(content)

print("Recovered files up to step 2499")
