import React from 'react'

class ShoppingAddForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: 'Buy ',
			number: ''
		}
	}


	onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
		

	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number
		}

		this.props.onAdd(data)
	}

	render(){

		return (
			<div className='form'>
				<input type="text" className='title' name='title' placeholder='Title ...' onChange={this.onChange} value={this.state.title}/>
				<input type="number" className='number' name='number'  placeholder='13' onChange={this.onChange} value={this.state.number}/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}



export default ShoppingAddForm
