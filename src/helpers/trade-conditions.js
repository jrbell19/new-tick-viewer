

import Map from 'lodash/map'

let trade_conditions = {
  "1": {
      "id": 1,
      "type": "sale_condition",
      "name": "Acquisition",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "A"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "2": {
      "id": 2,
      "type": "sale_condition",
      "name": "Average Price Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "B",
          "UTP": "W"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "3": {
      "id": 3,
      "type": "sale_condition",
      "name": "Automatic Execution",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "E"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "4": {
      "id": 4,
      "type": "sale_condition",
      "name": "Bunched Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "B"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "5": {
      "id": 5,
      "type": "sale_condition",
      "name": "Bunched Sold Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "G"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "6": {
      "id": 6,
      "type": "sale_condition",
      "name": "CAP Election",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "I"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "7": {
      "id": 7,
      "type": "sale_condition",
      "name": "Cash Sale",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "C",
          "UTP": "C"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "8": {
      "id": 8,
      "type": "sale_condition",
      "name": "Closing Prints",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "6"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "9": {
      "id": 9,
      "type": "sale_condition",
      "name": "Cross Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "X",
          "UTP": "X"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "10": {
      "id": 10,
      "type": "sale_condition",
      "name": "Derivatively Priced",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "4",
          "UTP": "4"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "11": {
      "id": 11,
      "type": "sale_condition",
      "name": "Distribution",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "D"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "12": {
      "id": 12,
      "type": "sale_condition",
      "name": "Form T/Extended Hours",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "T",
          "UTP": "T"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "13": {
      "id": 13,
      "type": "sale_condition",
      "name": "Extended Hours (Sold Out Of Sequence)",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "U",
          "UTP": "U"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "14": {
      "id": 14,
      "type": "sale_condition",
      "name": "Intermarket Sweep",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "F",
          "UTP": "F"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "15": {
      "id": 15,
      "type": "sale_condition",
      "name": "Market Center Official Close",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "M",
          "UTP": "M"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "false"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "false"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "16": {
      "id": 16,
      "type": "sale_condition",
      "name": "Market Center Official Open",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "Q",
          "UTP": "Q"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "false"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "false"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "17": {
      "id": 17,
      "type": "sale_condition",
      "name": "Market Center Opening Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "O"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "18": {
      "id": 18,
      "type": "sale_condition",
      "name": "Market Center Reopening Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "5"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "19": {
      "id": 19,
      "type": "sale_condition",
      "name": "Market Center Closing Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "6"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "20": {
      "id": 20,
      "type": "sale_condition",
      "name": "Next Day",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "N",
          "UTP": "N"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "21": {
      "id": 21,
      "type": "sale_condition",
      "name": "Price Variation Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "H",
          "UTP": "H"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "22": {
      "id": 22,
      "type": "sale_condition",
      "name": "Prior Reference Price",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "P",
          "UTP": "P"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "23": {
      "id": 23,
      "type": "sale_condition",
      "name": "Rule 155 Trade (AMEX)",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "K",
          "UTP": "K"
      },
      "exchange": 1,
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "24": {
      "id": 24,
      "type": "sale_condition",
      "name": "Rule 127 (NYSE Only)",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "K"
      },
      "exchange": 10,
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "25": {
      "id": 25,
      "type": "sale_condition",
      "name": "Opening Prints",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "O"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "27": {
      "id": 27,
      "type": "sale_condition",
      "name": "Stopped Stock (Regular Trade)",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "1"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "28": {
      "id": 28,
      "type": "sale_condition",
      "name": "Re-Opening Prints",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "5"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "29": {
      "id": 29,
      "type": "sale_condition",
      "name": "Seller",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "R",
          "UTP": "R"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "30": {
      "id": 30,
      "type": "sale_condition",
      "name": "Sold Last",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "L",
          "UTP": "L"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "31": {
      "id": 31,
      "type": "sale_condition",
      "name": "Sold Last and Stopped Stock",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "2"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "32": {
      "id": 32,
      "type": "sale_condition",
      "name": "Sold (Out Of Sequence)",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "Z",
          "UTP": "Z"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "33": {
      "id": 33,
      "type": "sale_condition",
      "name": "Sold (Out of Sequence) and Stopped Stock",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "3"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "34": {
      "id": 34,
      "type": "sale_condition",
      "name": "Split Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "S"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "35": {
      "id": 35,
      "type": "sale_condition",
      "name": "Stock Option",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "V"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "36": {
      "id": 36,
      "type": "sale_condition",
      "name": "Yellow Flag Regular Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "Y"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "37": {
      "id": 37,
      "type": "sale_condition",
      "name": "Odd Lot Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "UTP": "I",
          "CTA": "I"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "38": {
      "id": 38,
      "type": "sale_condition",
      "name": "Corrected Consolidated Close (per listing market)",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "9",
          "UTP": "9"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "false"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "false"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "41": {
      "id": 41,
      "type": "trade_thru_exempt",
      "name": "Trade Thru Exempt",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "1",
          "UTP": "X"
      },
      "data_types": [
          "trade"
      ]
  },
  "52": {
      "id": 52,
      "type": "sale_condition",
      "name": "Contingent Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "V",
          "UTP": "V"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "53": {
      "id": 53,
      "type": "sale_condition",
      "name": "Qualified Contingent Trade",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "7",
          "UTP": "7"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "false",
              "updates_open_close": "false",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ]
  },
  "55": {
      "id": 55,
      "type": "sale_condition",
      "name": "Opening Reopening Trade Detail",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "G"
      },
      "update_rules": {
          "consolidated": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          },
          "market_center": {
              "updates_high_low": "true",
              "updates_open_close": "true",
              "updates_volume": "true"
          }
      },
      "data_types": [
          "trade"
      ],
      "legacy": "true"
  },
  "57": {
      "id": 57,
      "type": "short_sale_restriction_indicator",
      "name": "Short Sale Restriction Activated",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "A"
      },
      "data_types": [
          "trade"
      ]
  },
  "58": {
      "id": 58,
      "type": "short_sale_restriction_indicator",
      "name": "Short Sale Restriction Continued",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "C"
      },
      "data_types": [
          "trade"
      ]
  },
  "59": {
      "id": 59,
      "type": "short_sale_restriction_indicator",
      "name": "Short Sale Restriction Deactivated",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "D"
      },
      "data_types": [
          "trade"
      ]
  },
  "60": {
      "id": 60,
      "type": "short_sale_restriction_indicator",
      "name": "Short Sale Restriction In Effect",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "E"
      },
      "data_types": [
          "trade"
      ]
  },
  "62": {
      "id": 62,
      "type": "financial_status_indicator",
      "name": "Financial Status - Bankrupt",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "1"
      },
      "data_types": [
          "trade"
      ]
  },
  "63": {
      "id": 63,
      "type": "financial_status_indicator",
      "name": "Financial Status - Deficient",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "2"
      },
      "data_types": [
          "trade"
      ]
  },
  "64": {
      "id": 64,
      "type": "financial_status_indicator",
      "name": "Financial Status - Delinquent",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "3"
      },
      "data_types": [
          "trade"
      ]
  },
  "65": {
      "id": 65,
      "type": "financial_status_indicator",
      "name": "Financial Status - Bankrupt and Deficient",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "4"
      },
      "data_types": [
          "trade"
      ]
  },
  "66": {
      "id": 66,
      "type": "financial_status_indicator",
      "name": "Financial Status - Bankrupt and Delinquent",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "5"
      },
      "data_types": [
          "trade"
      ]
  },
  "67": {
      "id": 67,
      "type": "financial_status_indicator",
      "name": "Financial Status - Deficient and Delinquent",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "6"
      },
      "data_types": [
          "trade"
      ]
  },
  "68": {
      "id": 68,
      "type": "financial_status_indicator",
      "name": "Financial Status - Deficient, Delinquent, and Bankrupt",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "7"
      },
      "data_types": [
          "trade"
      ]
  },
  "69": {
      "id": 69,
      "type": "financial_status_indicator",
      "name": "Financial Status - Liquidation",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "A"
      },
      "data_types": [
          "trade"
      ]
  },
  "70": {
      "id": 70,
      "type": "financial_status_indicator",
      "name": "Financial Status - Creations Suspended",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "8"
      },
      "data_types": [
          "trade"
      ]
  },
  "71": {
      "id": 71,
      "type": "financial_status_indicator",
      "name": "Financial Status - Redemptions Suspended",
      "asset_class": "stocks",
      "sip_mapping": {
          "CTA": "9"
      },
      "data_types": [
          "trade"
      ]
  }
}


export function GetConditions( ids ){
	return Map( ids, ( id ) => {
		return trade_conditions[ `${id}` ].name
	})
}

export function GetUpdateRules( ids, ruleSet, rule) {
  let updateElibility = "true"
  for (let id in ids) {
    let condition = ids[id]
    let updateRules = trade_conditions[condition].update_rules

    if (updateRules != null) {
      let tradeConditionRule = updateRules[ruleSet][rule]
      if (tradeConditionRule == "false") {
        updateElibility = "false"
      }
    }
  }
  return updateElibility
}
