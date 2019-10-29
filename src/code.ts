import { Subject } from "rxjs/Subject";

//Create a new subject
var subject = new Subject();

//Create a subscription
subject.subscribe(
    data => addItem("Observer 1: " + data),
    err => addItem("Error: " + err),
    () => addItem("Observer 1 Completed")
)

//Emit values
subject.next('The first thing has been sent');


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}