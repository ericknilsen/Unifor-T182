"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_component_1 = require('./app.component');
const app_routes_1 = require('./app-routes');
const http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
])
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map