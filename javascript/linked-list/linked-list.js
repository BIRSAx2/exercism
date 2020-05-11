//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const Node = function(value){
  this.value=value;
  this.next=null;
  this.previous=null;
  return this.value;
};

export class LinkedList {
  constructor(){
    this.length=0;
    this.tail=null;
    this.head=null;
  }
  push(value) {
    const node= new Node(value)
    if(this.length===0){
      this.tail=node;
      this.head=node;
    } else{
      this.tail.next=node;
      node.previous=this.tail;
      this.tail=node;
    }
    this.length++;
    return node;
  } 

  pop() {
    const node= this.delete(this.tail);
    if(this.tail)
      this.tail.next=null;
    return node.value
  }

  shift() {
    const node= this.delete(this.head);
    this.head=node.next;
    return node.value;
  }

  unshift(value) {
    const node = new Node(value);
    if(this.length===0){
      this.head=node;
      this.tail=node;
    } else{
      const prevHead = this.head;
      this.head.previous=node;
      this.head=node;
      this.head.next=prevHead;
    }
    this.length++;
    return node.value
  }

  delete(value) {
    const valueToSearch = value instanceof Node ? value.value : value;
    let searchNode=this.head;
    let foundNode=null;
    if(valueToSearch===this.head.value){
      foundNode=this.head;
      this.head=this.head.next;
    }
    if(valueToSearch===this.tail.value){
      foundNode=this.tail;
      this.tail=this.tail.previous;
    }
    while(!searchNode || !foundNode){
      if(valueToSearch===searchNode.value){
        foundNode=searchNode;
        foundNode.previous=foundNode.next;
      }else{
        searchNode=searchNode.next;
        if(searchNode==null)
          break;
      }      
    }
    if(foundNode)
      this.length--;
    return foundNode;
  }

  count() {
    return this.length;
  }
}
