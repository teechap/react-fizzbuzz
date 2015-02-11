var FizzBuzzer = React.createClass({displayName: "FizzBuzzer",

    getInitialState: function(){
        return {count: 0, display: 0};
    },

    Increment: function(){
        this.state.count++;
        var currentCount = this.state.count;

        if (isDivisibleByBoth(currentCount)){
            this.state.display = "FizzBuzz";
        } else if (isDivisibleBy3(currentCount)){
            this.state.display = "Fizz";
        } else if (isDivisibleBy5(currentCount)){
            this.state.display = "Buzz";
        } else {
            this.state.display = currentCount;
        }
    },

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
    },

    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.display), 
                React.createElement("button", {onClick: this.Increment()}, "Increment")
            )
        );
    }
});

React.render(React.createElement(FizzBuzzer, null), document.body);
