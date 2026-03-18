export const problems = [
  {
    id: 1,
    slug: "two-sum",
    title: "Two Sum",

    difficulty: "Easy",
    acceptance: 49.2,

    description: `
Given an array of integers nums and an integer target, return indices of the
two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.
`,

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 9"
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists"
    ],

    tags: ["Array", "Hash Table"],

    solved: false,

    // 🔥 NEW: Starter Code per language
    starterCode: {
      javascript: `function twoSum(nums, target) {

};`,

      python: `class Solution:
    def twoSum(self, nums, target):
        pass`,

      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {

    }
}`,

      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

    }
};`
    },

    functionName: "twoSum",

    testcases: [
      {
        input: "[2,7,11,15],9",
        expected: "[0,1]"
      },
      {
        input: "[3,2,4],6",
        expected: "[1,2]"
      }
    ],

    hiddenTestcases: [
      {
        input: "[3,3],6",
        expected: "[0,1]"
      },
      {
        input: "[1,5,3,7],8",
        expected: "[0,3]"
      }
    ]
  }
]