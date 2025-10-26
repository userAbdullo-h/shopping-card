import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { arr } from '../constants'
import Filter from './filter'
import Information from './information'
import SearchPanel from './search-panel'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: arr,
      search: '',
      filter: 'completed'
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

  searchData = (arr, term) => {
    if(!term.length) {
      return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  onUpdateSearch= (search) => {
    this.setState({search})
  }

  filterData = (arr, filter) =>{
    switch (filter) {
      case 'completed':
        return arr.filter(item => item.active);
    
      case 'big-size':
       return arr.filter(item => item.size > 10)
      default:
        return arr
    }
  }

  onFilterSelect = (filter) =>{
    this.setState({filter})
  }


  render(){
    const {data,search, filter} = this.state

    const allData = this.filterData(this.searchData(data, search), filter)

    return (
      <div className='app'>
        <div className='wrapper'>
          <div className='card'>
            <Information 
              length={data.length}
            />

            <SearchPanel
              onUpdateSearch={this.onUpdateSearch}
            />

            <ShoppingAddForm 
              onAdd={this.onAdd}
            />

            <ShoppingList  
              data={allData}
              onDelete={this.onDelete}  
              onToggleActive={this.onToggleActive}
            />

            <Filter 
              filter={filter} 
              onFilterSelect={this.onFilterSelect}
            />
          </div>
          <img src='/my-logo.png' />
        </div>
      </div>
    )
  }
}

export default App
