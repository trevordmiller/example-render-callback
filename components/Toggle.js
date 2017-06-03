import {Component} from 'react'

class Toggle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
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
