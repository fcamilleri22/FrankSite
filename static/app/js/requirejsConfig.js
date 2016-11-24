require.config({
    baseUrl: "/static",
    paths: {
        app: "app/js",
        html: "app/html",
        jquery: "lib/js/jquery/dist/jquery.min",
        requirejs: "lib/js/requirejs/require",
        text: "lib/js/text/text"
    }
});

require(["app/app"]);
