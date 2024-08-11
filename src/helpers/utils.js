

import moment from 'moment'

export function humanFileSize( bytes, si = true ){
	var thresh = si ? 1000 : 1024
	if(Math.abs(bytes) < thresh) {
		return bytes + ' B'
	}
	var units = si
		? ['kB','MB','GB','TB','PB','EB','ZB','YB']
		: ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB']
	var u = -1
	do {
		bytes /= thresh
		++u
	} while(Math.abs(bytes) >= thresh && u < units.length - 1)
	return bytes.toFixed(1)+' '+units[u]
}


export function GetMidnightTS( date ){
	let midnight = moment( date )
		midnight = midnight.hour(0).minute(0).second(0)
		return midnight.valueOf() * 1000
}

export function GetMicroSinceMidnight( midnight, nanosecond ){
	if( !nanosecond ) return null
	return Math.round( ( nanosecond / 1000 ) - midnight )
}


export function GetMarket( tape ){
	if( tape === 1 ) return 'NYSE'
	return 'NASDAQ'
}

