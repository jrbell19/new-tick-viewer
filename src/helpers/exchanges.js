
import Find from 'lodash/find'

const exchanges = [
  {
    "id": 0,
    "type": "TRF",
    "market": "equities",
    "mic": "TFF",
    "name": "Multiple",
    "tape": "-"
  },
  {
    "id": 1,
    "type": "exchange",
    "market": "equities",
    "mic": "XASE",
    "name": "NYSE American (AMEX)",
    "tape": "A",
    "code": "AMX"
  },
  {
    "id": 2,
    "type": "exchange",
    "market": "equities",
    "mic": "XNAS",
    "name": "NASDAQ OMX BX",
    "tape": "B",
    "code": "NSD"
  },
  {
    "id": 3,
    "type": "TRF",
    "market": "equities",
    "name": "National Stock Exchange",
    "mic": "XCIS",
    "tape": "C"
  },
  {
    "id": 4,
    "type": "TRF",
    "market": "equities",
    "mic": "FINR",
    "name": "FINRA",
    "tape": "D"
  },
  {
    "id": 5,
    "type": "TRF",
    "market": "equities",
    "mic": "CQS",
    "name": "Consolidated Quote System",
    "tape": "E"
  },
  {
    "id": 6,
    "type": "TRF",
    "market": "equities",
    "mic": "XISX",
    "name": "International Securities Exchange",
    "tape": "I",
    "code": "IOE"
  },
  {
    "id": 7,
    "type": "exchange",
    "market": "equities",
    "mic": "EDGA",
    "name": "Cboe EDGA",
    "tape": "J",
    "code": "XCBO"
  },
  {
    "id": 8,
    "type": "exchange",
    "market": "equities",
    "mic": "EDGX",
    "name": "Cboe EDGX",
    "tape": "K",
    "code": "EDGX"
  },
  {
    "id": 9,
    "type": "exchange",
    "market": "equities",
    "mic": "XCHI",
    "name": "Chicago Stock Exchange, Inc",
    "tape": "M"
  },
  {
    "id": 10,
    "type": "exchange",
    "market": "equities",
    "mic": "XNYS",
    "name": "New York Stock Exchange",
    "tape": "N",
    "code": "NYE"
  },
  {
    "id": 11,
    "type": "exchange",
    "market": "equities",
    "mic": "ARCX",
    "name": "NYSE Arca",
    "tape": "P",
    "code": "ARCA"
  },
  {
    "id": 12,
    "type": "exchange",
    "market": "equities",
    "mic": "XNGS",
    "name": "Nasdaq",
    "tape": "T",
    "code": "NSD"
  },
  {
    "id": 13,
    "type": "TRF",
    "market": "equities",
    "mic": "CTS",
    "name": "Consolidated Tape System",
    "tape": "S"
  },
  {
    "id": 14,
    "type": "TRF",
    "market": "equities",
    "mic": "OOTC",
    "name": "OTC Bulletin Board",
    "tape": "U"
  },
  {
    "id": 141,
    "type": "TRF",
    "market": "equities",
    "mic": "XOTC",
    "name": "OTC Bulletin Board",
    "tape": "U"
  },
  {
    "id": 142,
    "type": "TRF",
    "market": "equities",
    "mic": "PSGM",
    "name": "OTC Bulletin Board",
    "tape": "U",
    "code": "GREY"
  },
  {
    "id": 143,
    "type": "TRF",
    "market": "equities",
    "mic": "PINX",
    "name": "OTC Bulletin Board",
    "tape": "U",
    "code": "OTO"
  },
  {
    "id": 144,
    "type": "TRF",
    "market": "equities",
    "mic": "OTCB",
    "name": "OTC Bulletin Board",
    "tape": "U",
    "code": "OTCQB"
  },
  {
    "id": 145,
    "type": "TRF",
    "market": "equities",
    "mic": "OTCQ",
    "name": "OTC Bulletin Board",
    "tape": "U",
    "code": "OTCQX"
  },
  {
    "id": 15,
    "type": "exchange",
    "market": "equities",
    "mic": "IEXG",
    "name": "IEX",
    "tape": "V",
    "code": "IEXG"
  },
  {
    "id": 16,
    "type": "TRF",
    "market": "equities",
    "mic": "XCBO",
    "name": "Chicago Board Options Exchange",
    "tape": "W",
    "code": "CBO"
  },
  {
    "id": 17,
    "type": "exchange",
    "market": "equities",
    "mic": "PHLX",
    "name": "Nasdaq PSX",
    "tape": "X"
  },
  {
    "id": 18,
    "type": "exchange",
    "market": "equities",
    "mic": "BATY",
    "name": "Cboe BYX",
    "tape": "Y",
    "code": "BATS"
  },
  {
    "id": 19,
    "type": "exchange",
    "market": "equities",
    "mic": "BATS",
    "name": "Cboe BZX",
    "tape": "Z",
    "code": "BATS"
  },
  {
    "id": 33,
    "type": "exchange",
    "market": "equities",
    "mic": "XBOS",
    "name": "NASDAQ BX Options/ETF",
    "tape": "B"
  },
  {
    "id": 36,
    "type": "exchange",
    "market": "index",
    "name": "CME S&P Complete Indices",
    "code": "SPIC"
  },
  {
    "id": 37,
    "type": "exchange",
    "market": "index",
    "name": "Russell Tick Indices",
    "code": "RUS"
  },
  {
    "id": 38,
    "type": "exchange",
    "market": "index",
    "name": "CSMI Indices Exchange",
    "code": "MDX"
  },
  {
    "id": 39,
    "type": "exchange",
    "market": "index",
    "name": "CME S&P Base Indices",
    "code": "SPIB"
  },
  {
    "id": 40,
    "type": "exchange",
    "market": "index",
    "name": "Dow Jones Indexes",
    "code": "DJI"
  },
  {
    "id": 20,
    "type": "banking",
    "market": "currencies",
    "name": "Currency Banks 1"
  },
  {
    "id": 44,
    "type": "banking",
    "market": "currencies",
    "name": "Currency Banks 2"
  },
  {
    "id": 60,
    "type": "banking",
    "market": "currencies",
    "name": "Currency Banks 3"
  },
  {
    "id": 21,
    "type": "exchange",
    "market": "equities",
    "mic": "MEMX",
    "name": "Members Exchange",
    "tape": "U",
    "code": "MEMX"
   },
   {
    "id": 20,
    "type": "exchange",
    "market": "equities",
    "mic": "MPRL",
    "name": "MIAX Pearl",
    "tape": "H",
    "code": "MPRL"
   },
]

export function GetExchange( id ){
  return Find ( exchanges, { id: id })
}


