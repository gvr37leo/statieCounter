class Router {
    listeners
    pretrigger
    posttrigger

    constructor() {
        this.listeners = [];
        
    }
    listen(regex, listener) {
        this.listeners.push(new RouteRegistration(regex, listener));
    }
    trigger(string) {
        this.pretrigger()
        for (var routeRegistration of this.listeners) {
            var result = routeRegistration.regex.exec(string);
            if (result != null) {
                routeRegistration.listener(result);
                break;
            }
        }
        this.posttrigger()
    }
    navigate(url) {
        window.history.pushState(null, null, url);
        this.trigger(url);
    }

    interceptNavigation(){

        navigation.addEventListener('navigate',(e) => {
            e.preventDefault()
            this.navigate(e.destination.url)
        })
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