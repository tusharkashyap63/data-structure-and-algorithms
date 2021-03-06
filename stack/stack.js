/*

A stack is a container of objects that are inserted and removed according to the last-
in first-out (LIFO) principle. Objects can be inserted into a stack at any time, but
only the most recently inserted (that is, “last”) object can be removed at any time.

*/

class Stack {
  constructor() {
    this.array = [];
  }

  /* insert elements to the stack and catch other args */
  push(x, ...args) {
    this.array.push(x);
    args.map(elem=> this.array.push(elem))
  }

  /* return top most element in the stack 
    and removes it from the stack 
    Underflow if stack is empty  */
  pop() {
    if (this.isEmpity()) return "Underflow";
    return this.array.pop();
  }

  /* Used to get top most element without deleting it*/
  peek() {
    if (this.isEmpity()) return "Empity";
    return this.array[this.array.length - 1];
  }

  /* returns size of the stack */
  size() {
    return this.array.length;
  }

  isEmpity() {
    return this.array.length == 0;
  }

  toString(){
      return this.array.toString()
  }

  printStack() {
    let str = "";
    this.array.map((elem) => {
      str += elem + ", ";
    });
    return str.substring(0, str.length-2);
  }
}

let st = new Stack();
st.push(1);
st.push(2);
st.printStack();
console.log(st.printStack());
