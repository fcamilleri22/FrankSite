require.config({
    baseUrl: "/static",
    paths: {
        app: "app/js",
        html: "app/html",
        requirejs: "lib/js/requirejs/require",
        text: "lib/js/text/text"
    }
});

require(["app/app"]);
