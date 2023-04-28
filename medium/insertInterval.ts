/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.



Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


STRATEGY
All intervals are in ascending order, and they do not overlap.
Should the new interval sit between intervals or span a range of intervals, it will join these intervals
into a single interview with the local min and max.

what constitutes this checking logic?
an interval FITS if it's low is greater than i's high, and its high is less than i+1's low

if this condition is not true, then the interval will subsume previously existing intervals dependent on their relationship to it's highs and lows.
we can determine the new index's starting index by comparing the lows.
  if the newLow is less than current low, and new high is less than current low, insert in place
  if newLow is less than current low, and newHigh is less than or equal to current High, replace currentLow with newLow and return
  if newLow is less than current low, and newHigh is greater than current high,
  if newLow is less than current high and newHigh is less than or equal to currentHigh, no changes to original
  if newLow is less than current high and newHigh is greater than current High, continue, but with currentLow as newLow

writing all this logic has me considering whether i should use a helper function to accomplish this goal.
the outer function would find where to begin, while handling edge cases.
once conditions are met where a join of intervals would be the case, we call join searcher.


*/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let incomingLow: number = newInterval[0];
  let incomingHigh: number = newInterval[1];

  for (let i: number = 0; i < intervals.length; i++) {
    let currentLow: number = intervals[i][0];
    let currentHigh: number = intervals[i][1];
    if (incomingLow <= currentLow && incomingHigh < currentLow) {
      //insert in place (splice i think?)
      intervals.splice(i, 0, [incomingLow, incomingHigh])
    } else if (incomingLow <= currentLow && incomingHigh <= currentHigh) {
      intervals[i][0] = incomingLow;
      return intervals;
    } else if ()
  }

};