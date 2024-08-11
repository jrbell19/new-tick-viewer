
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'

const ConnectedSwitch = connect(( store ) => ({
	location: store.location
}))( Switch )

@connect(( store ) => ({
	location: store.location,
}))
class Footer extends Component {

	// Render
	render(){
		return (
			<footer class="section is-small footer has-background-white">
				<div className="container is-fluid">
					<div className="columns">
						<div className="column">
							<p>Copyright &copy; 2020 Polygon.io, Inc. All rights reserved.</p>
						</div>
						<div className="column has-text-right">
						
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default withRouter( Footer )

