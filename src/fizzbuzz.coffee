FizzBuzzer = React.createClass
  getInitialState: ->
    count: 0,
    display: 0

  increment: ->
    @setState count: ++@state.count

    currentCount = @state.count

    if @isDivisibleByBoth currentCount
      @setState display: 'FizzBuzz'
    else if @isDivisibleBy3 currentCount
      @setState display: 'Fizz'
    else if @isDivisibleBy5 currentCount
      @setState display: 'Buzz'
    else
      @setState display: currentCount

  render: ->
    {div, h1, button} = React.DOM
    (div {}, [
      (h1 {}, @state.display),
      (button {onClick: @increment}, 'Increment')
    ])

  #helper functions
  isDivisibleBy3: (number)->
    number % 3 == 0

  isDivisibleBy5: (number)->
    number % 5 == 0

  isDivisibleByBoth: (number)->
    number % 5 == 0 and number % 3 == 0

React.render(React.createElement(FizzBuzzer, null), document.body)