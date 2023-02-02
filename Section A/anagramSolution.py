from collections import defaultdict

def groupAnagrams(strs):
    str_map = defaultdict(list)
    for s in strs:
        str_map[''.join(sorted(s))].append(s)
    return list(str_map.values())

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))