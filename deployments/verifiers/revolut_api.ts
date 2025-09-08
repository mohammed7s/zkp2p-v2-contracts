import { BigNumber, ethers } from "ethers";
import { Currency } from "../../utils/protocolUtils";
import { hashProviderParams } from "@zkp2p/reclaim-witness-sdk";

/**
 * Revolut Business API Payment Method Configuration
 * 
 * This payment method uses dual proofs from Revolut Business API:
 * 1. Transaction API proof - verifies payment details
 * 2. Counterparties API proof - verifies recipient revtag
 * 
 * The dual proof approach ensures both payment completion and recipient verification.
 */

export const getRevolutApiProviderHashes = () => {
  const hashes = [];
  
  // Transaction API provider hash - extracts payment details
  // URL: https://b2b.revolut.com/api/1.0/transaction/{id}
  const transactionHash = hashProviderParams({
    url: "https://b2b.revolut.com/api/1.0/transaction/{{TRANSACTION_ID}}",
    method: "GET",
    body: "",
    responseMatches: [
      {
        "type": "regex",
        "value": `"id":"(?<id>[^"]+)"`
      },
      {
        "type": "regex",
        "value": `"amount":(?<amount>[0-9\\.]+)`
      },
      {
        "type": "regex",
        "value": `"state":"(?<state>[^"]+)"`
      },
      {
        "type": "regex",
        "value": `"counterparty":\\{"id":"(?<counterpartyId>[^"]+)"`
      },
      {
        "type": "regex",
        "value": `"createdAt":"(?<createdAt>[^"]+)"`
      }
    ],
    responseRedactions: [
      {
        "jsonPath": "$.id",
        "xPath": ""
      },
      {
        "jsonPath": "$.amount",
        "xPath": ""
      },
      {
        "jsonPath": "$.state",
        "xPath": ""
      },
      {
        "jsonPath": "$.counterparty.id",
        "xPath": ""
      },
      {
        "jsonPath": "$.createdAt",
        "xPath": ""
      }
    ]
  });
  
  // Counterparty API provider hash - extracts recipient revtag
  // URL: https://b2b.revolut.com/api/1.0/counterparties
  const counterpartyHash = hashProviderParams({
    url: "https://b2b.revolut.com/api/1.0/counterparties",
    method: "GET",
    body: "",
    responseMatches: [
      {
        "type": "regex",
        "value": `"id":"(?<id>[^"]+)"`
      },
      {
        "type": "regex",
        "value": `"profile":\\{"revTag":"(?<revTag>[^"]+)"`
      },
      {
        "type": "regex",
        "value": `"country":"(?<country>[^"]+)"`
      }
    ],
    responseRedactions: [
      {
        "jsonPath": "$[*].id",
        "xPath": ""
      },
      {
        "jsonPath": "$[*].profile.revTag",
        "xPath": ""
      },
      {
        "jsonPath": "$[*].profile.country",
        "xPath": ""
      }
    ]
  });

  hashes.push(transactionHash);
  hashes.push(counterpartyHash);
  
  return hashes;
};

export const REVOLUT_API_CURRENCIES: any = [
  Currency.USD,
  Currency.EUR,
  Currency.GBP,
  Currency.SGD,
  Currency.NZD,
  Currency.AUD,
  Currency.CAD,
  Currency.JPY,
  Currency.HKD,
  Currency.MXN,
  Currency.SAR,
  Currency.AED,
  Currency.THB,
  Currency.TRY,
  Currency.PLN,
  Currency.CHF,
  Currency.ZAR
];

// Payment method hash for "revolut-api"
export const REVOLUT_API_PAYMENT_METHOD_HASH = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("revolut-api"));

// Buffer for timestamp validation - 1 hour to account for processing delays
export const REVOLUT_API_TIMESTAMP_BUFFER = BigNumber.from(3600);