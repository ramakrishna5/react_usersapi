import React, { Component } from 'react'
import Button from './proxy/Button'
import '../css/App.css'
import { connect } from 'react-redux'
import fetchUsers from '../actions/fetchUser'
import fetchMoreUsers from '../actions/fetchMoreUsers'

class App extends Component {
	
	render() {

		return (
			<div className="App">
				<Button className="primary" text="Fetch users" onClick={this.props.fetchUsers}/>
				<header className="App-header">
				<table>
					<thead>
						<th>
							Name
						</th>
						<th>
							Email
						</th>
						<th>
							City
						</th>
						<th>
							Company
						</th>
					</thead>
					<tbody>
					{this.props.users.map( (user, index) =>{
                            return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr> 
						})
					}
						{/* <UserList users={this.props.users}/> */}
					</tbody>
					
				</table>
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
		users: state.users
})

export default connect(mapStateToProps, { fetchUsers, fetchMoreUsers })(App);
