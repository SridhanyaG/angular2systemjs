import {Component} from '@angular/core';
import {Order} from './checkout.order';
@Component({
    selector:'checkout',
    templateUrl:'app/checkout/checkout.form.html',
    styles:[
        `
        .control-label.required::after {
            content:"*";
            color:red;
        }
        .ng-valid[required] {
        border-left: 5px solid #42A948; /* green */
        }

        .ng-invalid {
        border-left: 5px solid #a94442; /* red */
        }
        `
    ]
})
export class CheckOutForm {
    order:Order;
    constructor(){
        this.order = new Order();
    }

logForm(value: any) {
    console.log(value);
  }
}