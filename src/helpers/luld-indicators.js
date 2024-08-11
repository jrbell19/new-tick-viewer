

import Map from 'lodash/map'

let luld_indicators = {


  '1': 'LULD Price Band',
  '2': 'Republished LULD Price Band',
  '3': 'NBB Limit State Entered',
  '4': 'NBB Limit State Exited',
  '5': 'NBO Limit State Entered',
  '6': 'NBO Limit State Exited',
  '7': 'NBB and NBO Limit State Entered',
  '8': 'NBB and NBO Limit State Exited',
  '9': 'NBB Limit State Entered and NBO Limit State Exited',
  '10': 'NBB Limit State Exited and NBO Limit State Entered',
  '11': 'Auction Extension ( Auction Status Message )',

  '20': 'Opening Update',
  '21': 'Intra-Day Update',
  '22': 'Restated Value',
  '23': 'Suspended during trading halt / pause',
  '24': 'Re-Opening Update',
  '25': 'Outside price band rule hours',

  '30': 'National Best Bid and / or National Best Offer are Executable',
  '31': 'National Best Bid below Lower Limit Price Band – National Best Bid is Non-Executable',
  '32': 'National Best Offer above Upper Limit Price Band – National Best Offer is NonExecutable',
  '33': 'National Best Bid below Lower Limit Price Band and National Best Offer above Upper Limit Price Band – National Best Bid and National Best Offer are Non-Executable',
  '34': 'National Best Bid equals Upper Limit Price Band – National Best Bid is in Limit State',
  '35': 'National Best Offer equals Lower Limit Price Band – National Best Offer is in Limit State',
  '36': 'National Best Bid equals Upper Limit Price Band – National Best Bid is in Limit State and National Best Offer above Upper Limit Price Band – National Best Offer is Non-Executable',
  '37': 'National Best Bid below Lower Limit Price Band – National Best Bid is Non-Executable and National Best Offer equals Lower Limit Price Band – National Best Offer is in Limit State',
  '38': 'National Best Bid equals Upper Limit Price Band and National Best Offer equals Lower Limit Price Band (Crossed - NOT in Limit State)',

  '40': 'National Best Offer equals Lower Limit Price Band – National Best Offer is in Limit State and National Best Bid below Lower Limit Price Band – National Best Bid is NonExecutable',
  '41': 'National Best Bid equals Upper Limit Price Band – National Best Bid is in Limit State and National Best Offer equals Lower Limit Price Band – National Best Offer is in Limit State',

}


export function GetConditions( ids ){
	return Map( ids, ( id ) => {
		return luld_indicators[ `${id}` ]
	})
}