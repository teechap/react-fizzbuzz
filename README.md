#React-FizzBuzz
##A classic fizzbuzz implementation
I made a simple Fizzbuzz implentation to learn React.js. As with all React apps, the source in ```src/``` must be compiled from JSX to JavaScript to work properly. Use this command to compile to JS in the ```build/``` directory when files change:

##Now In CoffeeScript
FizzBuzz is now written in CoffeeScript and does not use JSX. Here's an example for how to compile a .coffee file:
```bash
coffee -o build/ -c src/fizzbuzz.coffee
```

Here's how to compile the JSX for JavaScript version:
```bash
jsx --watch src/ build/
```
FYI: you may need to ```npm install -g react-tools``` if you haven't already.
