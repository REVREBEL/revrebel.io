
/**
* REVREBEL
* Default feed Layout
* 2023-03-14 03:27:25
*/
(function() {
    // Loader
    var loader = new function() {
        this.rC = -1,
        this.r = [],
        this.add = function(t) {
            this.r.push(t)
        },
        this.addTag = function(t, e) {
            var i = document.getElementsByTagName("head")[0],
                s = t.indexOf(".js") > 0 ? "script" : "link",
                n = document.createElement(s);
            i.appendChild(n),
            n.onload = e,
            n.charset = "UTF-8",
            "script" === s ? (n.type = "text/javascript", n.src = t) : "link" === s && (n.rel = "stylesheet", n.href = t)
        },
        this.loadNext = function() {
            if (this.rC++, this.rC >= this.r.length)
                this.done();
            else {
                var t = this.r[this.rC];
                this.addTag(t, this.loadNext.bind(this))
            }
        },
        this.done = function() {
            this.onResourcesLoaded(window.Curator)
        },
        this.load = function(t) {
            this.onResourcesLoaded = t,
            this.loadNext()
        }
    };

    // Config
    var config = {
        "post": {
            "template": "post-grid",
            "imageHeight": "100%",
            "minWidth": 250,
            "showTitles": true,
            "showShare": true,
            "showComments": false,
            "showLikes": false,
            "autoPlayVideos": false,
            "clickAction": "open-popup",
            "clickReadMoreAction": "open-popup",
            "maxLines": 0
        },
        "widget": {
            "animate": false,
            "continuousScroll": false,
            "continuousScrollOffset": 50,
            "rows": 3,
            "template": "widget-grid",
            "showLoadMore": false,
            "loadMoreRows": 1,
            "verticalSpacing": 0,
            "horizontalSpacing": 0,
            "autoLoadNew": false,
            "lazyLoadType": "none",
            "gridMobile": false
        },
        "responsive": {
            "480": {
                "widget": {
                    "loadMoreRows": 4
                }
            },
            "768": {
                "widget": {
                    "loadMoreRows": 2
                }
            }
        },
        "lang": "en",
        "container": "#instagram-feed-container",
        "debug": 0,
        "hidePoweredBy": false,
        "embedSource": "",
        "forceHttps": false,
        "feed": {
            "id": "38e4a179-ac04-47be-a378-d72620b58e44",
            "apiEndpoint": "https:\/\/api.curator.io",
            "postsPerPage": 12,
            "params": {},
            "limit": 25
        },
        "popup": {
            "template": "popup",
            "templateWrapper": "popup-wrapper",
            "autoPlayVideos": false,
            "deepLink": false
        },
        "filter": {
            "template": "filter",
            "showNetworks": false,
            "showSources": false,
            "showAll": false,
            "default": "all",
            "limitPosts": false,
            "limitPostNumber": 0,
            "period": ""
        },
        "type": "Grid",
        "theme": "sydney"
    };
    var colours = {
        "widgetBgColor": "transparent",
        "bgColor": "#ffffff",
        "borderColor": "#cccccc",
        "iconColor": "#1C447F",
        "textColor": "#1C447F",
        "linkColor": "#5B8AA0",
        "dateColor": "#000000",
        "footerColor": "#ffffff",
        "tabIndexColor": "#cccccc"
    };
    var styles = {};

    // Bootstrap
    function loaderCallback() {
        window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('https://cdn.curator.io/5.0/curator.embed.css');
    loader.add('https://cdn.curator.io/published-css/38e4a179-ac04-47be-a378-d72620b58e44.css');

    loader.add('https://cdn.curator.io/5.0/curator.embed.js');



    loader.load(loaderCallback);
})();
