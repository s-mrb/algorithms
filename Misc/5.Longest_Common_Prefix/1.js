/*
Algo:

let lcp_len = strs[0].length
let cur_len
let next_str_len
for(let i=0; i<strs.length-1; i++){
    cur_len = 0
    next_str_len = strs[i + 1].length
    while(next_str_len && strs[i][cur_len]==strs[i+1][cur_len] && cur_len <= lcp_index):
        cur_len++
    lcp_len = cur_len


NOTE: 
in while conditions don't make 
cur_len <= lcp_len

cause then cur_len will exceed lcp_len which u don't want
}
*/

/*
Runtime: 76 ms, faster than 78.67% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 39.6 MB, less than 79.06% of JavaScript online submissions for Longest Common Prefix.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1 || strs.length > 200) {
    return ''
  }

  let lcp_len = strs[0].length
  if (lcp_len > 200) {
    return ''
  }

  let cur_len = 0
  let next_str_len
  for (let i = 0; i < strs.length - 1; i++) {
    cur_len = 0
    next_str_len = strs[i + 1].length
    while (
      cur_len <= next_str_len &&
      cur_len < lcp_len && lcp_len &&
      strs[i][cur_len] === strs[i + 1][cur_len]
    ) {
      cur_len++
    }
    lcp_len = cur_len
  }
  return strs[0].substring(0, lcp_len)
}
let c = ["acc","aaa","aaba"]
let d = ["reflower","flow","flight"]
console.log(longestCommonPrefix(d))
