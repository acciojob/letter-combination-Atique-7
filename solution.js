function letterCombinations(input_digit) {
  //Complete the function
  let res = [];
  
  let dict = {
     "2" : "abc",
     "3" : "def",
     "4" : "ghi",
     "5" : "jkl",
     "6" : "mno",
     "7" : "pqrs",
     "8" : "tuv",
     "9" : "wxyz"
  };
  
  function backtrack(i, curStr) {
    if(curStr.length == input_digit.length){
      res.push(curStr);
      return;
    }
    
    for(let c of dict[input_digit[i]]) {
      backtrack(i+1, curStr + c);
    }
  }
  
  if(input_digit){
    backtrack(0,"");
  }
  
  return res; 
}

module.exports = letterCombinations;
