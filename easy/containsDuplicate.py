"""
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


STRATEGY:
loop adding each unique element to a hashmap.
return false if not unique
return true if conclude loop!

"""

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        contents = {}
        for val in nums:
            if val in contents:
                return True
            else:
                contents[val] = 1
        return False