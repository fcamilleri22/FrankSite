require.config({
    baseUrl: "/static",
    paths: {
        app: "app/js",
        html: "app/html",
        jquery: "lib/js/jquery/dist/jquery",
        requirejs: "lib/js/requirejs/require"
    }
});

require(["app/app"]);
