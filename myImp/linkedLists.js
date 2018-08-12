var LLNode = /** @class */ (function () {
    function LLNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LLNode;
}());
var LLIterator = /** @class */ (function () {
    function LLIterator(_node) {
        this._node = _node;
        this._head = this._node;
        if (this._node.next === null) {
            this._tail = this._node;
        }
        else {
            do {
                this._node = this._node.next;
                if (this._node.next === null) {
                    this._tail = this._node; //  set tail
                    this._node = this._head; //  reset iterations
                }
            } while (this._node.next !== null); //  loop while next element is not null
        }
    }
    //  set next node
    LLIterator.prototype.next = function () {
        if (this._node.next !== null) {
            this._node = this._node.next;
        }
    };
    LLIterator.prototype.value = function () {
        return this._node;
    };
    LLIterator.prototype.add = function (newNode) {
        if (this._tail == this._node) {
            this._node.next = newNode;
        }
        else {
            this._tail.next = newNode;
        }
        this._tail = newNode;
    };
    LLIterator.prototype.start = function () {
        return this._head;
    };
    LLIterator.prototype.end = function () {
        return this._tail;
    };
    return LLIterator;
}());
var node_1 = new LLNode(createVal());
var node_2 = new LLNode(createVal());
var node_3 = new LLNode(createVal());
var list = new LLIterator(node_1);
list.add(node_2);
list.add(node_3);
test(list);
function createVal() {
    return ((Math.random() + 1) * 100).toFixed(0);
}
function test(list) {
    console.log("Head: " + list.start().value + ", Tail: " + list.end().value);
    console.log(list.value());
    list.next();
    console.log(list.value());
    list.next();
    console.log(list.value());
}
