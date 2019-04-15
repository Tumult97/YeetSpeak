import {Component} from '@angular/core';
import yeet from './languages/Yeet.json';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'YeetSpeak';
    private word = '';
    private english = '';
    private translation = '';
    private yeet = yeet;

    ngOnInit() {
        console.log(this.getCharacterChange(yeet, 'a')); // output 'testing'
    }

    translateFromEnglish(base: string) {
        this.translation = '';
        let wordArray = base.split(' ');
        let i: number = 0;
        // wordArray.forEach(word => {
        //     for (i = 0; i < word.length; i++) {
        //         this.translation += this.getCharacterChange(yeet, word.charAt(i)) + ' ';
        //     }
        // });
        base = base.replace('\n', '~');
        for (i = 0; i < base.length; i++) {
            if(base.charAt(i) == '~') {
                this.translation += '\n';
                continue;
            }

            this.translation += this.getCharacterChange(yeet, base.charAt(i)) + '_';
        }
        this.translation +=  this.getCharacterChange(yeet,'.');
        return this.translation;
    }

    getCharacterChange(language: Language, character: string) {
        switch (character.toLowerCase()) {
            case "a":
                return language.a;
            case "b":
                return language.b;
            case "c":
                return language.c;
            case "d":
                return language.d;
            case "e":
                return language.e;
            case "f":
                return language.f;
            case "g":
                return language.g;
            case "h":
                return language.h;
            case "i":
                return language.i;
            case "j":
                return language.j;
            case "k":
                return language.k;
            case "l":
                return language.l;
            case "m":
                return language.m;
            case "n":
                return language.n;
            case "o":
                return language.o;
            case "p":
                return language.p;
            case "q":
                return language.q;
            case "r":
                return language.r;
            case "s":
                return language.s;
            case "t":
                return language.t;
            case "u":
                return language.u;
            case "v":
                return language.v;
            case "w":
                return language.w;
            case "x":
                return language.x;
            case "y":
                return language.y;
            case "z":
                return language.z;
            case "0":
                return language.zero;
            case "1":
                return language.one;
            case "2":
                return language.two;
            case "3":
                return language.three;
            case "4":
                return language.four;
            case "5":
                return language.five;
            case "6":
                return language.six;
            case "7":
                return language.seven;
            case "8":
                return language.eight;
            case "9":
                return language.nine;
            case ".":
                return language.period;
            case "?":
                return language.question;
            case "!":
                return language.exclamation;
            case " ":
                return language.space;
            default:
                return '';
        }
    }
}
