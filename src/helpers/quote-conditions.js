

import Map from 'lodash/map'

let quote_conditions = {
  "0": "Regular",
  "1": "RegularTwoSidedOpen",
  "2": "RegularOneSidedOpen",
  "3": "SlowAsk",
  "4": "SlowBid",
  "5": "SlowBidAsk",
  "6": "SlowDueLRPBid",
  "7": "SlowDueLRPAsk",
  "8": "SlowDueNYSELRP",
  "9": "SlowDueSetSlowListBidAsk",
  "10": "ManualAskAutomaticBid",
  "11": "ManualBidAutomaticAsk",
  "12": "ManualBidAndAsk",
  "13": "Opening",
  "14": "Closing",
  "15": "Closed",
  "16": "Resume",
  "17": "FastTrading",
  "18": "TradingRangeIndication",
  "19": "MarketMakerQuotesClosed",
  "20": "NonFirm",
  "21": "NewsDissemination",
  "22": "OrderInflux",
  "23": "OrderImbalance",
  "24": "DueToRelatedSecurityNewsDissemination",
  "25": "DueToRelatedSecurityNewsPending",
  "26": "AdditionalInformation",
  "27": "NewsPending",
  "28": "AdditionalInformationDueToRelatedSecurity",
  "29": "DueToRelatedSecurity",
  "30": "InViewOfCommon",
  "31": "EquipmentChangeover",
  "32": "NoOpenNoResume",
  "33": "SubPennyTrading",
  "34": "AutomatedBidNoOfferNoBid",
  "35": "LuldPriceBand",
  "36": "MarketWideCircuitBreakerLevel1",
  "37": "MarketWideCircuitBreakerLevel2",
  "38": "MarketWideCircuitBreakerLevel3",
  "39": "RepublishedLuldPriceBand",
  "40": "OnDemandAuction",
  "41": "CashOnlySettlement",
  "42": "NextDaySettlement",
  "43": "LULDTradingPause",
  "71": "SlowDueLRPBidAsk"
}


export function GetConditions( ids ){
	return Map( ids, ( id ) => {
		return quote_conditions[ `${id}` ]
	})
}