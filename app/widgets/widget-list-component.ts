import { Component, Inject, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';

import {Widget} from './widget';
import {WidgetDetailComponent} from './widget-detail-component';
import {WidgetService} from './widget-service';

@Component({
    selector: 'widget-list',
    templateUrl: 'app/widgets/widget-list-component.html',
    styleUrls: ['app/widgets/widget-list-component.css'],
    directives: [WidgetDetailComponent]
})
export class WidgetListComponent implements OnInit {
    selectedWidget: Widget;
    widgets: Widget[];

    constructor(
        private _widgetService: WidgetService,
        private _router: Router) { }

    getWidgets() {
        this._widgetService.getWidgets().then(result => this.widgets = result);
    }

    ngOnInit() {
        this.getWidgets();
    }

    onSelect(w: Widget) {
        if (this.selectedWidget && this.selectedWidget === w) {
            this.selectedWidget = undefined;
        } else {
            this.selectedWidget = w;
        }
    }

    gotoWidgetDetail() {
        let link = ['WidgetDetail', { id: this.selectedWidget.id }]
        this._router.navigate(link);
    }
}
