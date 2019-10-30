import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

//Create a new subject
var subject = new Subject();
var behaviorSubject = new BehaviorSubject('First');

//Create a subscription
behaviorSubject.subscribe(
    data => addItem("Observer 1: " + data),
    err => addItem("Error: " + err),
    () => addItem("Observer 1 Completed")
)

//Emit values
behaviorSubject.next('The first thing has been sent');
behaviorSubject.next('Observer 2 is about to subscribe...');


//Second observer
var observer2 = behaviorSubject.subscribe(
    data => addItem("Observer 2: " + data)
)

behaviorSubject.next('The second thing has been sent');
behaviorSubject.next('A third thing has been sent');

observer2.unsubscribe();

behaviorSubject.next('A final thing has been sent');


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


