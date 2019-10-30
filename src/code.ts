import { AsyncSubject } from "rxjs/AsyncSubject";

//Create a new subject
var asyncSubject = new AsyncSubject();

//Create a subscription
asyncSubject.subscribe(
    data => addItem("Observer 1: " + data),
    () => addItem("Observer 1 Completed")
)

var i = 1;
var int = setInterval( () => asyncSubject.next(i++), 1000);


setTimeout( () => {
    var observer2 = asyncSubject.subscribe(
        data => addItem("Observer 2: " + data)
    )
    asyncSubject.complete()
}, 5000);  

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
  

