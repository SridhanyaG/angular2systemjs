import { provideRouter, RouterConfig } from '@angular/router';

import { ListPageComponent } from './home/list.component';
import { CheckOutForm }  from './checkout/checkout.form';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: ListPageComponent },
  { path: 'checkout', component: CheckOutForm}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
