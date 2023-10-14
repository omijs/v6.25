import mapping from 'mappingjs'
import shared from './shared'
import todo from '../model/todo'
import ovm from './other'

class TodoViewModel {
  constructor() {
    this.data = {
      items: []
    }
  }

  update() {
    mapping(todo, this.data, {
      fullName: function(){
        return this.author.firstName + this.author.lastName
      }
    })
    this.data.projName = shared.projName
  }

  complete(id) {
    todo.complete(id)
    this.update()
  }

  uncomplete(id) {
    todo.uncomplete(id)
    this.update()
  }

  add(text) {
    todo.add(text)
    this.update()
    ovm.update()
  }

  getAll() {
    todo.getAll(() => {
      this.update()
      ovm.update()
    })
  }

  changeSharedData() {
    shared.projName = 'I love omi-mvvm.'
    ovm.update()
    this.update()
  }
}

const vm = new TodoViewModel()

export default vm
