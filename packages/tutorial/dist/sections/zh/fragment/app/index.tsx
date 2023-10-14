import { tag, WeElement, render, h } from 'omi'

@tag('my-counter')
class MyCounter extends WeElement {
  static css = `
    span {
      color: red;
    }`

  count = 0

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

render(<my-counter />, 'body')