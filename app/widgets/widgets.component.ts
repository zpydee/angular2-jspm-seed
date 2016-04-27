import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {WidgetListComponent} from './widget-list.component';
import {WidgetDetailComponent} from './widget-detail.component';
import {WidgetService} from './widget.service';

@Component({
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet],
    providers: [WidgetService]
})
@RouteConfig([
    {
        path: '/',
        name: 'WidgetList',
        component: WidgetListComponent,
        useAsDefault: true,
    }, {
        path: '/:id',
        name: 'WidgetDetail',
        component: WidgetDetailComponent
    }
])
export class WidgetsComponent {

}