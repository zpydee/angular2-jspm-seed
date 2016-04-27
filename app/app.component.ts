import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {WidgetsComponent} from './widgets/widgets.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }, {
    path: '/widgets/...',
    name: 'Widgets',
    component: WidgetsComponent
  },
])
export class AppComponent {
    public appTitle: string = 'WMS';
}
