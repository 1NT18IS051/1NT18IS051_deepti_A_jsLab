class Node{
  constructor(val){
    this.val=val
    this.next=null
  }
}

class List{
    constructor(){
      this.head = null
      this.tail = null
      this.length = 0
    }
    add(val){
      let node=new Node(val)
      if(this.head==null){
        this.head=node
        this.tail=this.head
      }
      else{
        this.tail.next=node
        this.tail=node
      }
      this.length++
      return this
    }
    
     
    display(){
      var current=this.head;
      console.log('Elements in the list are :')
      while(current<=this.tail){
        console.log(current.val)
        current=current.next
      }
    }
    
     del(index){
        if(index < 0 || index >= this.length) return 'enter valid index';
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
         let delt=current
        current=current.next
        return 'deleted '+delt.val
    }
    
    
    remove(){
      if(this.head==null){
        return 'empty link';
      }
      else{
        let del=this.head
        this.head=this.head.next
        return 'deleted '+del.val
      }
    }
}
let l=new List()
l.add(3)
l.add(5)
l.add(6)
l.add(8)
l.add(9)
l.display()

console.log(l.remove())
l.display()
l.del(1)

//console.log(l.remove())
//console.log(l.remove())
//console.log(l.remove())