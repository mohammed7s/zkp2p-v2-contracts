import { BigNumber } from "ethers";
import { Currency } from "../../utils/protocolUtils";
import { hashProviderParams } from "@zkp2p/reclaim-witness-sdk";

export const getMonzoReclaimProviderHashes = async (
  /*length: number*/
) => {
  const hashed = hashProviderParams(
    {
      url: "https://api.monzo.com/transactions/{{TX_ID}}",
      method: "GET",
      body: "",
      responseMatches: [
        {
          "type": "regex",
          "value": "\"amount\":(?<amount>[0-9\\-]+)"
        },
        {
          "type": "regex",
          "value": "\"settled\":\"(?<completedDate>[^\"]+)\""
        },
        {
          "type": "regex",
          "value": "\"user_id\":\"(?<userId>[^\"]+)\"",
          "hash": true
        },
        {
          "type": "regex",
          "value": "\"scheme\":\"p2p_payment\""
        },
        {
          "type": "regex",
          "value": "\"currency\":\"(?<currency>[^\"]+)\""
        },
        {
          "type": "regex",
          "value": "\"hold_decision_status\":\"decision_status\\.released\""
        }
      ],
      responseRedactions: [
        {
          "jsonPath": "$.transaction.amount",
          "xPath": ""
        },
        {
          "jsonPath": "$.transaction.settled",
          "xPath": ""
        },
        {
          "jsonPath": "$.transaction.counterparty.user_id",
          "xPath": ""
        },
        {
          "jsonPath": "$.transaction.scheme",
          "xPath": ""
        },
        {
          "jsonPath": "$.transaction.currency",
          "xPath": ""
        },
        {
          "jsonPath": "$.transaction.metadata.hold_decision_status",
          "xPath": ""
        }
      ]
    }
  );
  return [hashed];
};

export const MONZO_RECLAIM_CURRENCIES: any = [
  Currency.GBP,
];

// July 26 2025
export const MONZO_OLD_EXTENSION_PROVIDER_HASHES = [
  '0x84ddc30f67565667fb6a68855d19905e30624601b9d584736c6befaf2217077b'
];

export const MONZO_RECLAIM_TIMESTAMP_BUFFER = BigNumber.from(30);   // 30 seconds

export const MONZO_RECLAIM_FEE_SHARE: any = {
  "base": BigNumber.from(0),  // 0% of sustainability fee
  "base_staging": BigNumber.from(0),  // 0% of sustainability fee
  "sepolia": BigNumber.from(0),  // 0% of sustainability fee 
  "localhost": BigNumber.from(0),  // 0% of sustainability fee
  "base_sepolia": BigNumber.from(0),  // 0% of sustainability fee
}