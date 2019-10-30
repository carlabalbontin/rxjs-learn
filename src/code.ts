import { ReplaySubject } from "rxjs/ReplaySubject";

//Create a new subject
var replaySubject = new ReplaySubject(30, 2000);

//Create a subscription
replaySubject.subscribe(
    data => addItem("Observer 1: " + data),
    err => addItem("Error: " + err),
    () => addItem("Observer 1 Completed")
)

var i = 1;
var int = setInterval( () => replaySubject.next(i++), 1000);


setTimeout( () => {
    var observer2 = replaySubject.subscribe(
        data => addItem("Observer 2: " + data)
    )
}, 5000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
  

