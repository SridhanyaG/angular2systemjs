import {  PipeTransform, Pipe } from '@angular/core';
import { IMug } from '../model/app.store.Mug';

@Pipe({
    name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {
    transform(value: IMug[], filter: number): IMug[] {
        return filter ? value.filter((mug: IMug) =>
            mug.price < filter) : value;
    }
}
