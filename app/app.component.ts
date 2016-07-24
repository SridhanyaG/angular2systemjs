import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector:'store',
    templateUrl:'app/app.component.html',
  styles: [`
    .storeheader {
        border-bottom: 3px double green;
        background-color: #b29d85;
    }
  `],
   directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = 'Coffee Mugs And Cups store';
}