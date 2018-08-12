//  This is just a script testing LinkedLists

class LLNode {
  constructor(public value: any, public next: LLNode = null) {}
}

class LinkedList {
  private _head: LLNode;
  private _tail: LLNode;

  constructor(private _node?: LLNode) {
    if (_node) {
      this._head = this._node;
      if (this._node.next === null) {
        this._tail = this._node;
      } else {
        do {
          //  iterate to next node
          this._node = this._node.next;

          //  check if last element
          if (this._node.next === null) {
            this._tail = this._node; //  set tail
            this._node = this._head; //  reset iterations
          }
        } while (this._node.next !== null); //  loop while next element is not null
      }
    } else{
        this._head = null;
        this._tail = null;
    }
  }

  //  set next node
  next() {
    if (this._node.next !== null) {
      this._node = this._node.next;
    }
  }

  //  return current node
  value(): LLNode {
    return this._node;
  }

  add(newNode: LLNode) {
    if (this._tail == this._node) {
      this._node.next = newNode;
    } else {
      this._tail.next = newNode;
    }

    this._tail = newNode;
  }

  //  return start of list
  start() {
    return this._head;
  }

  //  return end of list
  end() {
    return this._tail;
  }

  isEmpty(){
      return this._head === null
  }
}

let node_1: LLNode = new LLNode(createVal());
let node_2: LLNode = new LLNode(createVal());
let node_3: LLNode = new LLNode(createVal());

let list: LinkedList = new LinkedList(node_1);
list.add(node_2);
list.add(node_3);

test(list);

let list2: LinkedList;

list2.add(new LLNode(createVal()));
console.log

function createVal() {
  return ((Math.random() + 1) * 100).toFixed(0);
}

function test(list: LinkedList) {
  console.log(`Head: ${list.start().value}, Tail: ${list.end().value}`);

  console.log(list.value());
  list.next();
  console.log(list.value());
  list.next();
  console.log(list.value());
}
