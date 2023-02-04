def say_number(num)
  return "Zero." if num == 0

  result = ""
  ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
  tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
  places = ["", "Thousand", "Million", "Billion", "Trillion"]

  i = 0
  while num > 0
    n = num % 1000
    temp = ""
    if n >= 100
      temp += "#{ones[n / 100]} Hundred "
      n %= 100
    end
    if n >= 20
      temp += "#{tens[n / 10]} "
      n %= 10
    end
    temp += ones[n]
    result = "#{temp} #{places[i]} #{result}".strip
    i += 1
    num = num / 1000.floor
  end

  "#{result}."
end

puts say_number(23)

raise "assertion failed" unless say_number(0) == "Zero."
raise "assertion failed" unless say_number(1) == "One."
raise "assertion failed" unless say_number(12) == "Twelve."
raise "assertion failed" unless say_number(123) == "One Hundred Twenty Three."
raise "assertion failed" unless say_number(1234) == "One Thousand Two Hundred Thirty Four."
raise "assertion failed" unless say_number(1234567) == "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven."

puts "tests passed"