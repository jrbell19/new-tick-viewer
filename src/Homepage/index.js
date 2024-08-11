

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import actions from './../../actions/'
import moment from 'moment'
import debounce from 'lodash/debounce'

import CompanyHeading from '../components/CompanyHeading'
import TradesTable from '../components/TradesTable'
import LuldTable from '../components/LuldTable'
import QuotesTable from '../components/QuotesTable'

const ConnectedSwitch = connect((store) => ({
	location: store.location
}))(Switch)

@connect((store) => ({
	router: store.router,
	location: store.location,
	query: store.query,
	results: store.results,
	app: store.app,
}))
class Homepage extends Component {

	constructor() {
		super()
		this._triggerAPIFetch = debounce(this.triggerAPIFetch.bind(this), 400, {
			trailing: true,
		})
	}

	state = {
		visible: {},
	}

	componentDidMount() {
		this.props.dispatch(actions.app.update({ title: 'Polygon.io - Real-time Stock APIs, Forex and Crypto' }))
		let update = {}
		if (
			(this.props.match.params.ticker) ||
			(this.props.match.params.time) ||
			(this.props.match.params.type) ||
			(this.props.match.params.date)
		) {
			update['ticker'] = this.props.match.params.ticker
			update['sequence_number'] = this.props.match.params.sequence_number
			update['time'] = this.props.match.params.time
			update['dataType'] = this.props.match.params.type
			update['date'] = moment(this.props.match.params.date)
			this.props.dispatch(actions.query.update(update))
		} else {
			this.updateURL()
		}
		this.triggerAPIFetch()
	}

	componentDidUpdate(prevProps) {
		console.log('API KEY:', this.props.router.location.query.apikey)

		// If the URL has changed, we should trigger
		// a call to fetch new data:
		if (
			(prevProps.match.params.ticker != this.props.match.params.ticker) ||
			(prevProps.match.params.date != this.props.match.params.date) ||
			(prevProps.match.params.type != this.props.match.params.type) ||
			(prevProps.match.params.time != this.props.match.params.time) ||
			(prevProps.match.params.sequence_number != this.props.match.params.sequence_number)
		) {
			console.log('URL HAS CHANGED')
			this._triggerAPIFetch()
		}

		// Check if Query PROPS has changed,
		// If they have, we should update the URL to reflect that.
		if (
			(prevProps.query.ticker != this.props.query.ticker && this.props.query.ticker != '') ||
			(prevProps.query.dataType != this.props.query.dataType) ||
			(prevProps.query.date != this.props.query.date) ||
			(prevProps.query.sequence_number != this.props.query.sequence_number) ||
			(prevProps.query.time != this.props.query.time)
		) {
			console.log('PROPS CHANGED')
			this.updateURL()
		}
	}

	updateURL(params) {
		let url = `/${this.props.query.ticker}/${this.props.query.dataType}/${this.props.query.date.format('YYYY-MM-DD')}/${this.props.query.time}`
		if (this.props.query.sequence_number) {
			url = `${url}/${this.props.query.sequence_number}`
		}
		this.props.history.push(`${url}?apikey=${this.props.router.location.query.apikey}`)
	}

	triggerAPIFetch() {
		let date = moment(this.props.match.params.date)
		let ts = moment(`${date.format('YYYY-MM-DD')} ${this.props.match.params.time}`)
		this.props.dispatch(actions.results.fetch({
		  apiKey: this.props.router.location.query.apikey,
		  dataType: this.props.match.params.type, // This will be 'trades' or 'quotes'
		  sequence_number: this.props.match.params.sequence_number,
		  ticker: this.props.match.params.ticker,
		  ts: ts,
		}))
		this.props.dispatch(actions.results.fetchDetails({
		  apiKey: this.props.router.location.query.apikey,
		  ticker: this.props.match.params.ticker,
		  ts: ts,
		}))
	  }

	typeChange(e) {
		this.props.dispatch(actions.query.update({ dataType: e.target.value, sequence_number: null }))
	}

	dateChange(e) {
		this.props.dispatch(actions.query.update({ date: moment(e.target.value), sequence_number: null }))
	}

	timeChange(e) {
		this.props.dispatch(actions.query.update({ time: e.target.value, sequence_number: null }))
	}

	timestampChange(e) {
		// Check if empty so you can remove the timestamp without new request
		if (e.target.value != "") {
			let ts = moment(new Date(e.target.value / 1000000))
			let time = ts.format('HH:mm:ss')
			this.props.dispatch(actions.query.update({ time: time, sequence_number: null, date: ts }))	
		}
	}

	tickerChange(e) {
		this.props.dispatch(actions.query.update({ ticker: e.target.value, sequence_number: null }))
	}

	// Render
	render() {

		let fullTimestamp = moment(`${this.props.query.date.format('YYYY-MM-DD')} ${this.props.query.time}`)
		console.log('fullTimestamp:', fullTimestamp.format())

		// If there is no API Key in the URL
		if (!this.props.router.location.query.apikey || this.props.router.location.query.apikey == "undefined") {
			return (
				<section class="hero is-white is-fullheight">
					<div class="hero-body">
						<div class="container has-text-centered">
							<p class="title">
								API Key Required
							</p>
							<p className="subtitle">
								URL should end in ?apikey=YOUR_API_KEY
							</p>
						</div>
					</div>
				</section>
			)
		}

		return (
			<div id="homepage" class="page">

				<nav class="navbar is-primary is-fixed-top">

					<div class="navbar-brand">
						<a class="navbar-item" href="https://polygon.io?fr=tickviewer">
							<img src="/images/icon.svg" />
						</a>
						<div className="navbar-item">
							<div class="field is-horizontal has-addons">
								<div class="control">
									<input class="input ticker-input" type="text" placeholder="Ticker"
										value={this.props.query.ticker} onChange={this.tickerChange.bind(this)} />
								</div>
								<div className="control">
									<div className="select">
										<select value={this.props.query.dataType} onChange={this.typeChange.bind(this)}>
											<option value="trades">Trades</option>
											<option value="nbbo">NBBO</option>
											{/* <option value="luld">LULD</option> */}
										</select>
									</div>
								</div>
								<div className="control">
									<input className="input" type="date" placeholder="Date"
										value={this.props.query.date.format('YYYY-MM-DD')} onChange={this.dateChange.bind(this)} />
								</div>
								<div className="control">
									<input className="input" type="text" placeholder="00:00:00"
										value={this.props.query.time} onChange={this.timeChange.bind(this)} />
								</div>
								<div className="control">
									<input className="input" type="text" placeholder="SIP Nanosecond Timestamp"
										value={this.props.query.timestamp} onChange={this.timestampChange.bind(this)} />
								</div>
							</div>
						</div>
					</div>
				</nav>



				<CompanyHeading />

				<If condition={this.props.results.resultsFetching}>
					<div className="section has-background-light">
						<h1 className="subtitle is-4">Loading...</h1>
					</div>
				</If>

				<If condition={this.props.results.type == 'trades'}>
					<TradesTable />
				</If>
				<If condition={this.props.results.type == 'luld'}>
					<LuldTable />
				</If>
				<If condition={this.props.results.type == 'nbbo'}>
					<QuotesTable />
				</If>

			</div>


		)
	}
}

export default withRouter(Homepage)