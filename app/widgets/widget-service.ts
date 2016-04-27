import {Injectable} from 'angular2/core';
import {widgetMock} from './widget_mock';

@Injectable()
export class WidgetService {

    constructor() { }

    getWidgets() {
        return Promise.resolve(widgetMock);
    }

    getWidget(i: number) {
        return Promise.resolve(widgetMock)
            .then(widgets => widgets
                .filter(widget => widget.id === i
                )[0]
            );
    }
}