#React-FizzBuzz
##A classic fizzbuzz implementation
I made a simple Fizzbuzz implentation to learn React.js. The source in ```src/``` must be compiled from CoffeeScript to JavaScript then bundled with Browserify.

##Now In CoffeeScript
FizzBuzz is now written in CoffeeScript and does not use JSX. Here's an example for how to compile a .coffee file:
```bash
coffee -o src/javascripts/ -c src/coffees/fizzbuzz.coffee
```

After the ```.coffee``` files are compiled, you'll have to run Browserify to bundle the app and its dependencies in ```build/bundle.js```.
```bash
browserify src/javascripts/fizzbuzz.js -o build/bundle.js
```

Here's how to compile the JSX for the old JavaScript version:
```bash
jsx --watch src/ build/
```
FYI: you may need to ```npm install -g react-tools``` if you haven't already.
