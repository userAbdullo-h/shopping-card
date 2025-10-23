import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

function App() {

  const data = [
    {
      id:1,
      size: 10,
      title: 'Buy banana',
      active: false,
    },
    {
      id:2,
      size: 5,
      title: 'Buy orange',
      active: true,
    },
    {
      id:3,
      size: 12,
      title: 'Buy apple',
      active: false,
    },
  ]

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Information />

					<ShoppingAddForm />

					<ShoppingList  data={data}/>

					<Filter />
				</div>
				<img src='/my-logo.png' />
			</div>
		</div>
	)
}

export default App
