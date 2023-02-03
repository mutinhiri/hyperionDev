# Code Review Assessment for Option 3: Ruby Task 

#

Great work in attempting the challenge. Great work in showing your idea in implementing the solution. Here are ways in which you can improve your code to reach your solution:

1. Missing end for conditional if else: when trying to run the program, it throws an error ``` Unmatched keyword, missing `end' ? ``` With the normal execution flow the program will terminate because 

2. Incorrect Comparison: The line while ```num != x``` on *palindrome.rb line number * is an infinite loop because the value of num never changes, which will cause the program to run indefinitely. The correct line should be ``` while num > 0```.

3. The indentation of the code is inconsistent, which makes it hard to read I would advise to make your 

4. Naming conventions: The variable names are in line with Ruby naming conventions, but it could be improved by adding more descriptive names. For example, num could be original_num and reversd could be reversed_num.

5. Error handling: The code does not check for cases where the input is not an integer. It could be improved by adding a check for that, or adding a comment indicating that the input must be an integer.:
 Check for 0: *The code could be improved by adding a check for the case when x is 0, since 0 is a palindrome and the code currently returns false for it.*

Here is what an updated solution could look like: 

``` def is_palindrome(x)
  return false if x < 0
  reversed = 0
  num = x
  while num > 0
    extracted = num % 10
    reversed = reversed * 10 + extracted
    num = num / 10
  end
  reversed == x
end

```