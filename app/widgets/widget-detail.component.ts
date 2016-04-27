import {Component, Input, Inject, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Widget} from './widget';
import {WidgetService} from './widget.service';


@Component({
    selector: 'widget-detail',
    templateUrl: 'app/widgets/widget-detail.component.html',
})
export class WidgetDetailComponent implements OnInit {
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _widgetService: WidgetService) { }
        
    widget: Widget;
    originalWidget: Widget


    getWidget(id: number) {
        this._widgetService.getWidget(id)
            .then(result => {
                this.widget = result
                this.originalWidget = Object.assign({}, this.widget);
            });
    }

    save() {
        this.gotoWidgetList();
    }

    cancel() {
        this.widget = Object.assign({}, this.originalWidget);
    }

    gotoWidgetList() {
        this._router.navigate(['WidgetList'])
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.getWidget(id);
    }
}
