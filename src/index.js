module.exports = function check(str, bracketsConfig) {
  const BRACKETS_OPEN = ["(", "[", "|", "{", "1", "3", "5", "7", "8"];
  const BRACKETS_PAAR = {
    ")": "(", 
    "]": "[",
    "|": "|", 
    "}": "{", 
    "2": "1", 
    "4": "3",
    "6": "5",
    "7": "7", 
    "8": "8",
  }

  let stack = [];

  for (let i = 0; i <= str.length - 1; i++) {

    // проверяем символ и если это открывающая скобка, то добавляем ее в стек
    if(BRACKETS_OPEN.includes(str[i])) {
      // добавляем проверку для палок, 7 и 8
      if ((str[i] == "7" || str[i] == "8" || str[i] == "|") && (stack.length > 0)) {
        if (str[i] == stack[stack.length - 1]) {
          stack.pop();
          continue;
        } 
      }
      stack.push(str[i]); 
/*       console.log("stack add: " + stack); */
    } else {
/*       console.log("stack 1control: " + stack); */
      if (stack.length == 0)  return false;

/*       console.log("1stack: " + stack);
      console.log("2stack length: " + stack.length); */
  
      let stackTop = stack[stack.length - 1];
     // console.log("3stackTop: " + stackTop)
  
      if (BRACKETS_PAAR[str[i]] == stackTop) {
        stack.pop();
        //console.log("4stack: " + stack);
        //console.log("5stack length: " + stack.length);
      } else {
       // console.log("problem stack: " + stack);
        return false;
      }

    }

  }

/*   console.log("6stack length final: " + stack.length);
  console.log(stack); */

  return stack.length == 0;



}