## Overview
'ja2k-seed' is a little boilerplate that set up a project incorporating:
- `systemjs` and `jspm`
- `angular 2`, and
- `karma` as a test runner
- `wallaby` for an integrated testing experience

`ja2k-seed` uses the `typescript` language.

The project is served using `lite-server` and has the necessary modifications
to monitor `typescript` file and update the browser on changes.

## Getting Started
After cloning, run:
```
npm install
```
This will install all npm, jspm and typings dependencies.

Thereafter:
- To launch lite-server:
```
npm start
```
- To run Karma tests:
```
npm test
```
- To start tests in Wallaby in your favourite IDE, please visit [WallabyJS](http://wallabyjs.com)

NOTE: The only test that's been included doesn't actually test
anything real since its inclusion is just to show how to get tests
running, not to actually test anything substantive.

## Known Issues
The YUML capability (in `/utils`) doesn't currently work so I' rather going to discuss it
when I have it working with the larger deendency tree caused by the inclusion
of Angular 2. If anyone want to resolve this before I get a chance, please submit a pull-request.
## Acknowledgements
- [Pluralsight's course](https://app.pluralsight.com/library/courses/javascript-systemjs-jspm/table-of-contents) on systemjs and jspm by Wes Higbee which guided the karma setup.
- [Mario Brendel's blog](http://www.mario-brendel.com/angular2-setup/2016/01/28/Angular2_Jspm_Setup_Part1/),
 which I used as reference to get the angular 2 piece in place.
- Kind assistance from wallabyjs in getting `wallaby.conf.js` correctly implemented