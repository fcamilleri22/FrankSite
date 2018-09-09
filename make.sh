#!/usr/bin/env bash
#Note: to be executed by "npm run build" NOT DIRECTLY
cp -r node_modules/requirejs \
    static/lib/js/

cp -r node_modules/font-awesome \
    static/lib/js/
