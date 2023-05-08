'''
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.



'''



class Solution(object):
    def longestPalindrome(self, s):
        tracking_dict = {}
        for letter in s:
            if letter in tracking_dict:
                tracking_dict[letter] += 1
            else:
                tracking_dict[letter] = 1

        total = 0
        largestOdd = 0

        for letter in tracking_dict:
            if (tracking_dict[letter] % 2) == 0:
                total += tracking_dict[letter]
            elif (tracking_dict[letter] > largestOdd):
                largestOdd = tracking_dict[letter]

        return total + largestOdd


        """
        :type s: str
        :rtype: int
        """


'''
The longest palindrome will be determined by stacking letters of even occurences on either side of eachother, sandwhiching the odd number of largest occurence if there is one.

I don't need to return the actual palindrome, just the length.

I am considering whether it would be more performant to stroe the letters based on number of occurences (a dictionary where the keys are occurances

maybe a dictionary of dictionaries?
'''