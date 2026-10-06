import json
import os

transcript_path = '/Users/thisisaman408/.gemini/antigravity-ide/brain/5b0bd40c-88fc-4202-b521-46e19ae4d2dc/.system_generated/logs/transcript_full.jsonl'
output_dir = 'recovery_old'
os.makedirs(output_dir, exist_ok=True)

files_state = {}

if os.path.exists(transcript_path):
    with open(transcript_path, 'r') as f:
        for line in f:
            try:
                entry = json.loads(line)
            except:
                continue
                
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
            if 'app/frontend/' in path:
                rel_path = path.split('app/frontend/')[1]
                out_path = os.path.join(output_dir, rel_path)
                os.makedirs(os.path.dirname(out_path), exist_ok=True)
                with open(out_path, 'w') as f:
                    f.write(content)
            else:
                pass

print("Recovered files from old conversation")
