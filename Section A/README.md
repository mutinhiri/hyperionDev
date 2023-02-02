# Code Review Assessment for Option 1: Python Task 

#

Great work in attempting the challeng. Great work in showing your idea in implementing the solution. Here are ways in which you can improve your code to reach your solution:

1. Sorting the Correct String: The line ```x = "".join(sorted()) ``` *on anagram.py line number 5*  is trying to sort an empty list, which will result in a TypeError. The correct line should be ```x = "".join(sorted(i))```, where ```i``` is the current word in the loop

2. Caching Sorted Strings: Sorting each string every time it is encountered as done on *anagram.py line number 5* is not efficient. Instead, we can cache the sorted string for each word and use that as the key in the dictionary. This can be done by creating a new list ``` sorted_strs ``` and storing the sorted string of each word at the same index as the original word in strs. This way, we only sort each word once, which will improve the overall time complexity.

3. Naming Conventions: The names of variables and methods in the code should follow the PEP 8 naming conventions. For example, ```result``` can be named ```result_dict```, and ob1 can  be named ```sol``` as short for Solution the class name.

4. Return Type: Instead of returning a list of lists on *anagram.py line number 10*, we can return a list of tuples, where each tuple consists of a sorted string and a list of anagrams. This makes the output more explicit and easier to understand.

5. I would suggest you make use of available method called ``` defaultdict ``` from the module ```collections.``` Instead of using a regular dictionary and checking if a key exists before adding a value we can simply add the word to the list of values associated with the key.

6. The line result = {} on *anagram.py line number 3* is initializing an empty dictionary, which means that we need to check if a key exists in the dictionary before adding a value. As previously mentioned, using a defaultdict would be more efficient and avoid the need for this check.

### The corrected solution can be something like this:

```
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):
        result_dict = defaultdict(list)
        for i in strs:
            x = "".join(sorted(i))
            result_dict[x].append(i)
        return list(result_dict.values())


sol = Solution()
print(sol.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

```