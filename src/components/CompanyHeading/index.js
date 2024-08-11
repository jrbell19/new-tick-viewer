
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


@connect((store) => ({
	location: store.location,
	results: store.results,
}))
class CompanyHeading extends Component {

	render() {
		return (
			<div className="company-heading has-background-light">



				<div className="section">


					<div className="columns is-mobile">
						<div className="column is-narrow company-logo-box">
							<img src={this.props.results.details.logo} alt={this.props.results.ticker} />
						</div>
						<div className="column">
							<h1 className="title"> <strong> {this.props.results.ticker} </strong></h1>
							<h2 className="subtitle">{this.props.results.details.name} (CIK: {this.props.results.details.cik})</h2>
							<div className="columns is-mobile">
								<div className="column is-narrow">
									<h2 className="title is-4"><strong>{this.props.results.trades}</strong></h2>
									<h2 className="subtitle">Trades </h2>
								</div>
								<div className="column is-narrow is-offest-1">
									<h2 className="title is-4"><strong>{this.props.results.nbbos}</strong></h2>
									<h2 className="subtitle">NBBO Quotes</h2>
								</div>
							</div>
						</div>
					</div>



					

				</div>

				<div className="section">

				<div className="table-title has-background-light">
						<h3 className="subtitle is-4"><strong>{this.props.results.type}</strong> {this.props.results.date.format('dddd, MMM Do YYYY')}</h3>
				</div>

				</div>
				
			</div>
		)
	}
}

export default CompanyHeading

