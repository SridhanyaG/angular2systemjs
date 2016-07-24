import {Component, OnInit} from '@angular/core';
import {StoreService} from '../model/app.storeservice';
import { IMug } from '../model/app.store.Mug';
import {StarComponent} from '../shared/star.component';
import {PriceFilterPipe} from "./priceFilterPipe";

@Component({
    selector:'list-mugs',
    templateUrl:'app/home/list.component.html',
    providers:[StoreService],
    styleUrls: ['app/home/list.component.css'],
    pipes: [PriceFilterPipe],
    directives:[StarComponent]
})
export class ListPageComponent implements OnInit {
    pageTitle: string = 'Mugs List';
    imageWidth: number = 100;
    imageHeight: number = 100;
    imageMargin: number = 2;
    mugs:IMug[];
    errorMessage: string;
    listFilter: string = '';
    constructor(private service:StoreService) {

    }

    ngOnInit(): void {
    console.log("Hiiiii");
    this.service.getMugs().subscribe(mugs => this.mugs = mugs,
                                     error =>  this.errorMessage = <any>error);
    }
}



