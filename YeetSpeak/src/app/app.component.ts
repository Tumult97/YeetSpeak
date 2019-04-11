import {Component} from '@angular/core';
import * as yeet from './languages/Yeet.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'YeetSpeak';
    public word = '';

    ngOnInit(){
        this.word = (<any>yeet).a;
        console.log(this.word); // output 'testing'
    }
}
