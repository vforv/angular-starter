import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'app-home',
    templateUrl: './home.html'
})

export class HomeComponent implements OnInit {

    ngOnInit() {
        let src = Observable.of(10);

        var subscription = src.subscribe(
            (x: any) => console.log('onNext: %s', x),
            (e: any) => console.log('onError: %s', e),
            () => console.log('onCompleted'));

    }
}