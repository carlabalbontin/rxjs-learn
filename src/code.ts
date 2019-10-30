import { Observable } from "rxjs/Observable";
import { merge } from "rxjs/observable/merge";

var observable1 = Observable.create( (observer:any) => {
    observer.next("Hey guys!");
});

var observable2 = Observable.create( (observer:any) => {
    observer.next("How is it going?");
});

var newObservable = merge(observable1, observable2);

newObservable.subscribe( (x:any) => addItem(x) );


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
  

