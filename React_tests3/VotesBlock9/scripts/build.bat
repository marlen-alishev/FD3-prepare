call babel --presets react,es2015 js/source -d js/build
call browserify js/build/app.js -o bundle.js
type css\components\* css\* > bundle.css
lite-server

