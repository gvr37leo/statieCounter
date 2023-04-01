class Router {
    constructor() {
        this.listeners = [];
    }
    listen(regex, listener) {
        this.listeners.push(new RouteRegistration(regex, listener));
    }
    trigger(string) {
        for (var routeRegistration of this.listeners) {
            var result = routeRegistration.regex.exec(string);
            if (result != null) {
                routeRegistration.listener(result);
                break;
            }
        }
    }
    navigate(url) {
        window.history.pushState(null, null, url);
        this.trigger(url);
    }
    locationListen() {
        window.addEventListener('popstate', () => {
            this.trigger(window.location.pathname);
        });
    }
}

class RouteRegistration {
    constructor(regex, listener) {
        this.regex = regex;
        this.listener = listener;
    }
}