import * as React from 'react'
const classes: any = require('./ToggleButton.scss')

export enum ToggleSide {
  Left,
  Right,
}

interface Props {
  side: ToggleSide
  leftText: string
  rightText: string
  onChange?: (ToggleSide) => void
  onClickOutside?: (ToggleSide) => void
  onBlur?: (e: any) => void
}

interface State {
  currentSide: ToggleSide
}

export default class ToggleButton extends React.Component<Props, State> {

  refs: {
    [key: string]: any
    container: Element
  }

  constructor (props) {
    super(props)

    this.state = {
      currentSide: this.props.side,
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true)
  }

  render() {
    return (
      <div className={classes.root} ref='container' onBlur={this.props.onBlur}>
        <span
          className={classes.label}
          onClick={() => this.onUpdateSide(ToggleSide.Left)}
        >
          {this.props.leftText}
        </span>
        <span
          className={`${classes.sliderContainer} ${this.state.currentSide === ToggleSide.Right ? classes.active : ''}`}
          onClick={() => this.toggle()}
        >
          <span className={classes.slider}></span>
        </span>
        <span
          className={classes.label}
          onClick={() => this.onUpdateSide(ToggleSide.Right)}
        >
          {this.props.rightText}
        </span>
      </div>
    )
  }

  handle = (e) => {
    if (!this.refs.container.contains(e.target) && this.props.onClickOutside) {
      this.props.onClickOutside(this.state.currentSide)
    }
  }

  private onUpdateSide (side) {
    this.setState({ currentSide: side })
    if (this.props.onChange) {
      this.props.onChange(side)
    }
  }

  private toggle () {
    this.onUpdateSide(this.state.currentSide === ToggleSide.Left ? ToggleSide.Right : ToggleSide.Left)
  }
}
