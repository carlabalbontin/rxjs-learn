// import * as Rx from "rxjs";

// var observable = Rx.fromEvent(document, 'mousemove');
// console.log(observable);

import { Observable } from "rxjs/Observable";

var observable = Observable.create( (observer:any) => {
    //to emit a value
    observer.next('Hey guys!')
});