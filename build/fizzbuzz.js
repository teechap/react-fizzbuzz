var FizzBuzzer = React.createClass({displayName: "FizzBuzzer",
    //sets up our data model
    getInitialState: function(){
        return {count: 0, display: 0};
    },

    Increment: function(){
        //setState re-renders the DOM element if needed
        this.setState({count: ++this.state.count});
        var currentCount = this.state.count;

        if (this.isDivisibleByBoth(currentCount)){
            this.setState({display:"FizzBuzz"});
        } else if (this.isDivisibleBy3(currentCount)){
            this.setState({display: "Fizz"});
        } else if (this.isDivisibleBy5(currentCount)){
            this.setState({display: "Buzz"});
        } else {
            this.setState({display: currentCount});
        }
    },

    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.display), 
                React.createElement("button", {onClick: this.Increment}, "Increment")
            )
        );
    },

    //helper functions, fizzbuzz-specific
    isDivisibleBy3: function(number){
        var result = number % 3;
        return result === 0;
    },

    isDivisibleBy5: function(number){
        var result = number % 5;
        return result === 0;
    },

    isDivisibleByBoth: function(number){
        var result1 = number % 3;
        var result2 = number % 5;
        return result1 === 0 && result2 === 0;
    }
});

//render the FizzBuzzer class to the DOM
React.render(React.createElement(FizzBuzzer, null), document.body);
