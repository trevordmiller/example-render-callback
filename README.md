# example-render-callback

An example of sharing stateful logic across React components using the Render Callback (aka Function as Child) pattern

## The Code

See the `components/` directory; it contains a `Toggle` component, which is a Render Callback. This `Toggle` component is used in the `Accordian`, `Modal`, and `Thumbnail` components to show how the stateful logic can be reused across each of these stateless functional components.

## Try it

The app can be viewed at [https://example-render-callback.now.sh](https://example-render-callback.now.sh)

## Syntax

The syntax for a Render Callback looks like this:

```javascript
import {Component} from 'react'

class SomeComponent extends Component {

  this.state = {
    someState: someValue,
  }

  render() {
    return this.props.children(this.state.someState)
  }
}

export default SomeComponent
``` 

Then it can be used like this:

```javascript
import React from 'react'

const AnotherComponent = () => (
  <SomeComponent>
    {(someState) => (
      // use someState
    )}
  </SomeComponent>
)

export default AnotherComponent
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
