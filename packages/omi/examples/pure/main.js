import { render, define } from '../../src/omi'

//Do not use pure element in browsers that do not support Reflect, such as ie11.
define('my-ele', function(props) {
  this.useCss(`ul{ color:${Math.random() > 0.5 ? 'red' : 'green'}; }`)
  setTimeout(() => {
    this.update()
  }, 5000)
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
})

render(
  <my-ele items={[{ text: 'Omi', id: 1 }, { text: 'Tencent', id: 2 }]} />,
  'body'
)
