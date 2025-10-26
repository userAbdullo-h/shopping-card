import ShoppingListItem from './shopping-list-item'

const ShoppingList = ({data, onDelete, onToggleActive}) => {
	return (
		<div className='shopping-list'>
			{data.length ? data.map(item => (
				<ShoppingListItem 
					item={item} 
					key={item.id} 
					onDeleteItem={() => onDelete(item.id)}
					onToggleActiveItem={() => onToggleActive(item.id)}
				/>
			)) : (
				<div>
					<h2 style={{textAlign: "center", color: '#FFF'}}>Not found data</h2>
				</div>
			)}
			
		</div>
	)
}

export default ShoppingList
