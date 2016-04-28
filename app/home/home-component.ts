import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    template: `
    <h4>Widget Management System</h4>
    <p> This is a simple demo site for managing widgets.
    It demonstrates the use of Angular2 in an environment
    powered by systemjs as a module loader and jspm as a 
    package manager.</p>
    <p>Use the links above to navigate.</p>
    <p>By the way, this component is what an app's
    child component would look like before we start implementing
    all its internal behviour....</p>
    `
})
export class HomeComponent{
    
}