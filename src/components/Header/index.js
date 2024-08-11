
import React, { Component } from 'react'
import { connect } from 'react-redux'


@connect(( store ) => ({
	location: store.location,
}))
class HeaderComponent extends Component {

		render(){
			return (
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item" href="/">
							<img src="/images/icon.svg" width="112" height="28" />
						</a>
						<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarBasicExample" class="navbar-menu">
						<div class="navbar-start">
							<div className="navbar-item">
								<h3 className="is-title is-3">Tick Inspector</h3>
							</div>
						</div>
						<div class="navbar-end">
						</div>
					</div>
				</nav>
			)
	}
}

export default HeaderComponent

