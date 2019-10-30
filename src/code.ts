import { Subject } from "rxjs/Subject";
import { ReplaySubject } from "rxjs/ReplaySubject";

//Create a new subject
var subject = new Subject();
var replaySubject = new ReplaySubject(2);

//Create a subscription
replaySubject.subscribe(
    data => addItem("Observer 1: " + data),
    err => addItem("Error: " + err),
    () => addItem("Observer 1 Completed")
)

//Emit values
replaySubject.next('The first thing has been sent');
replaySubject.next('Observer 2 is about to subscribe...');


//Second observer
var observer2 = replaySubject.subscribe(
    data => addItem("Observer 2: " + data)
)

replaySubject.next('The second thing has been sent');
replaySubject.next('A third thing has been sent');

observer2.unsubscribe();

replaySubject.next('A final thing has been sent');


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


