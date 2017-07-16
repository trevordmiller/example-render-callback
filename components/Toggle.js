import {Component} from 'react'

class Toggle extends Component {

  state = {
    isOpen: false,
  }

  handleToggleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return this.props.children(
      this.state.isOpen, 
      this.handleToggleClick
    )
  }
}

export default Toggle
