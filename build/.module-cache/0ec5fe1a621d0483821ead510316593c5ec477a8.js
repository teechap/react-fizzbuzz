var FizzBuzzer = React.createClass({displayName: "FizzBuzzer",

    getInitialState: function(){
        return {count: 0, display: 0};
    },

    Increment: function(){
        console.log("line 8!");
        this.state.count++;
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
                React.createElement("button", {onClick: this.Increment}, "Increment")
            )
        );
    }
});

React.render(React.createElement(FizzBuzzer, null), document.body);
