import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { arr } from '../constants'
import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: arr
    }
  }

  onDelete = (id) => {
    const newArr = this.state.data.filter(item => item.id !== id)
    this.setState({
      data: newArr
    })
  }
  
  onToggleActive = (id) => {
      console.log(`Item active: ${id}`);
      const newArr = this.state.data.map(item => {
        if(item.id === id) {
          return {...item, active: !item.active}
        }
        return item
      }) 

      this.setState({
        data: newArr
      })
  }

  onAdd = (item) => {
    const {title, number} = item
    const newData = {title,size: number, active:false, id: uuidv4()}
    const newArr = [...this.state.data, newData]
    this.setState({
      data: newArr
    })
  }


  render(){
    const {data} = this.state

    return (
      <div className='app'>
        <div className='wrapper'>
          <div className='card'>
            <Information />

            <ShoppingAddForm 
              onAdd={this.onAdd}
            />

            <ShoppingList  
              data={data}
              onDelete={this.onDelete}  
              onToggleActive={this.onToggleActive}
            />

            <Filter />
          </div>
          <img src='/my-logo.png' />
        </div>
      </div>
    )
  }
}

export default App
