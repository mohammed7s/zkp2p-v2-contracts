export default {
  "name": "base",
  "chainId": "8453",
  "contracts": {
    "CashappReclaimVerifier": {
      "address": "0x76D33A33068D86016B806dF02376dDBb23Dd3703",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETE_PAYMENT_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "Escrow": {
      "address": "0xCA38607D85E8F6294Dc10728669605E6664C2D70",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_chainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_intentExpirationPeriod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sustainabilityFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_sustainabilityFeeRecipient",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bool",
              "name": "acceptAllPaymentVerifiers",
              "type": "bool"
            }
          ],
          "name": "AcceptAllPaymentVerifiersUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            }
          ],
          "name": "DepositClosed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "currency",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newConversionRate",
              "type": "uint256"
            }
          ],
          "name": "DepositConversionRateUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "currency",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            }
          ],
          "name": "DepositCurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "min",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "max",
                  "type": "uint256"
                }
              ],
              "indexed": false,
              "internalType": "struct IEscrow.Range",
              "name": "intentAmountRange",
              "type": "tuple"
            }
          ],
          "name": "DepositReceived",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "payeeDetailsHash",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "intentGatingService",
              "type": "address"
            }
          ],
          "name": "DepositVerifierAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DepositWithdrawn",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "intentExpirationPeriod",
              "type": "uint256"
            }
          ],
          "name": "IntentExpirationPeriodSet",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "intentHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "sustainabilityFee",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "verifierFee",
              "type": "uint256"
            }
          ],
          "name": "IntentFulfilled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "intentHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            }
          ],
          "name": "IntentPruned",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "intentHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "fiatCurrency",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "name": "IntentSignaled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minDepositAmount",
              "type": "uint256"
            }
          ],
          "name": "MinDepositAmountSet",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Paused",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeShare",
              "type": "uint256"
            }
          ],
          "name": "PaymentVerifierAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "feeShare",
              "type": "uint256"
            }
          ],
          "name": "PaymentVerifierFeeShareUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            }
          ],
          "name": "PaymentVerifierRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "feeRecipient",
              "type": "address"
            }
          ],
          "name": "SustainabilityFeeRecipientUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "SustainabilityFeeUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "Unpaused",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "acceptAllPaymentVerifiers",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "accountDeposits",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "accountIntent",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_feeShare",
              "type": "uint256"
            }
          ],
          "name": "addWhitelistedPaymentVerifier",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_intentHash",
              "type": "bytes32"
            }
          ],
          "name": "cancelIntent",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "chainId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "min",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "max",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IEscrow.Range",
              "name": "_intentAmountRange",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_verifiers",
              "type": "address[]"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "intentGatingService",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IEscrow.DepositVerifierData[]",
              "name": "_verifierData",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "code",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IEscrow.Currency[][]",
              "name": "_currencies",
              "type": "tuple[][]"
            }
          ],
          "name": "createDeposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "depositCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "depositCurrencies",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "depositCurrencyConversionRate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "depositVerifierData",
          "outputs": [
            {
              "internalType": "address",
              "name": "intentGatingService",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "payeeDetails",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "depositVerifiers",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "deposits",
          "outputs": [
            {
              "internalType": "address",
              "name": "depositor",
              "type": "address"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "min",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "max",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IEscrow.Range",
              "name": "intentAmountRange",
              "type": "tuple"
            },
            {
              "internalType": "bool",
              "name": "acceptingIntents",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "remainingDeposits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "outstandingIntentAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "_paymentProof",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "_intentHash",
              "type": "bytes32"
            }
          ],
          "name": "fulfillIntent",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_account",
              "type": "address"
            }
          ],
          "name": "getAccountDeposits",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "depositId",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "depositor",
                      "type": "address"
                    },
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "uint256",
                          "name": "min",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "max",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Range",
                      "name": "intentAmountRange",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bool",
                      "name": "acceptingIntents",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "remainingDeposits",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "outstandingIntentAmount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes32[]",
                      "name": "intentHashes",
                      "type": "bytes32[]"
                    }
                  ],
                  "internalType": "struct IEscrow.Deposit",
                  "name": "deposit",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "availableLiquidity",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "verifier",
                      "type": "address"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "intentGatingService",
                          "type": "address"
                        },
                        {
                          "internalType": "string",
                          "name": "payeeDetails",
                          "type": "string"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct IEscrow.DepositVerifierData",
                      "name": "verificationData",
                      "type": "tuple"
                    },
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "code",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "uint256",
                          "name": "conversionRate",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Currency[]",
                      "name": "currencies",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.VerifierDataView[]",
                  "name": "verifiers",
                  "type": "tuple[]"
                }
              ],
              "internalType": "struct IEscrow.DepositView[]",
              "name": "depositArray",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_account",
              "type": "address"
            }
          ],
          "name": "getAccountIntent",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "intentHash",
                  "type": "bytes32"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "paymentVerifier",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "fiatCurrency",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "uint256",
                      "name": "conversionRate",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IEscrow.Intent",
                  "name": "intent",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "depositor",
                          "type": "address"
                        },
                        {
                          "internalType": "contract IERC20",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "components": [
                            {
                              "internalType": "uint256",
                              "name": "min",
                              "type": "uint256"
                            },
                            {
                              "internalType": "uint256",
                              "name": "max",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Range",
                          "name": "intentAmountRange",
                          "type": "tuple"
                        },
                        {
                          "internalType": "bool",
                          "name": "acceptingIntents",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "remainingDeposits",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "outstandingIntentAmount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes32[]",
                          "name": "intentHashes",
                          "type": "bytes32[]"
                        }
                      ],
                      "internalType": "struct IEscrow.Deposit",
                      "name": "deposit",
                      "type": "tuple"
                    },
                    {
                      "internalType": "uint256",
                      "name": "availableLiquidity",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "verifier",
                          "type": "address"
                        },
                        {
                          "components": [
                            {
                              "internalType": "address",
                              "name": "intentGatingService",
                              "type": "address"
                            },
                            {
                              "internalType": "string",
                              "name": "payeeDetails",
                              "type": "string"
                            },
                            {
                              "internalType": "bytes",
                              "name": "data",
                              "type": "bytes"
                            }
                          ],
                          "internalType": "struct IEscrow.DepositVerifierData",
                          "name": "verificationData",
                          "type": "tuple"
                        },
                        {
                          "components": [
                            {
                              "internalType": "bytes32",
                              "name": "code",
                              "type": "bytes32"
                            },
                            {
                              "internalType": "uint256",
                              "name": "conversionRate",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Currency[]",
                          "name": "currencies",
                          "type": "tuple[]"
                        }
                      ],
                      "internalType": "struct IEscrow.VerifierDataView[]",
                      "name": "verifiers",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.DepositView",
                  "name": "deposit",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IEscrow.IntentView",
              "name": "intentView",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_depositId",
              "type": "uint256"
            }
          ],
          "name": "getDeposit",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "depositId",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "depositor",
                      "type": "address"
                    },
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "uint256",
                          "name": "min",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "max",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Range",
                      "name": "intentAmountRange",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bool",
                      "name": "acceptingIntents",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "remainingDeposits",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "outstandingIntentAmount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes32[]",
                      "name": "intentHashes",
                      "type": "bytes32[]"
                    }
                  ],
                  "internalType": "struct IEscrow.Deposit",
                  "name": "deposit",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "availableLiquidity",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "verifier",
                      "type": "address"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "intentGatingService",
                          "type": "address"
                        },
                        {
                          "internalType": "string",
                          "name": "payeeDetails",
                          "type": "string"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct IEscrow.DepositVerifierData",
                      "name": "verificationData",
                      "type": "tuple"
                    },
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "code",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "uint256",
                          "name": "conversionRate",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Currency[]",
                      "name": "currencies",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.VerifierDataView[]",
                  "name": "verifiers",
                  "type": "tuple[]"
                }
              ],
              "internalType": "struct IEscrow.DepositView",
              "name": "depositView",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "_depositIds",
              "type": "uint256[]"
            }
          ],
          "name": "getDepositFromIds",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "depositId",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "depositor",
                      "type": "address"
                    },
                    {
                      "internalType": "contract IERC20",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "uint256",
                          "name": "min",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "max",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Range",
                      "name": "intentAmountRange",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bool",
                      "name": "acceptingIntents",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "remainingDeposits",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "outstandingIntentAmount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes32[]",
                      "name": "intentHashes",
                      "type": "bytes32[]"
                    }
                  ],
                  "internalType": "struct IEscrow.Deposit",
                  "name": "deposit",
                  "type": "tuple"
                },
                {
                  "internalType": "uint256",
                  "name": "availableLiquidity",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "verifier",
                      "type": "address"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "intentGatingService",
                          "type": "address"
                        },
                        {
                          "internalType": "string",
                          "name": "payeeDetails",
                          "type": "string"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct IEscrow.DepositVerifierData",
                      "name": "verificationData",
                      "type": "tuple"
                    },
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "code",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "uint256",
                          "name": "conversionRate",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct IEscrow.Currency[]",
                      "name": "currencies",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.VerifierDataView[]",
                  "name": "verifiers",
                  "type": "tuple[]"
                }
              ],
              "internalType": "struct IEscrow.DepositView[]",
              "name": "depositArray",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_intentHash",
              "type": "bytes32"
            }
          ],
          "name": "getIntent",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "intentHash",
                  "type": "bytes32"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "paymentVerifier",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "fiatCurrency",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "uint256",
                      "name": "conversionRate",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IEscrow.Intent",
                  "name": "intent",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "depositor",
                          "type": "address"
                        },
                        {
                          "internalType": "contract IERC20",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "components": [
                            {
                              "internalType": "uint256",
                              "name": "min",
                              "type": "uint256"
                            },
                            {
                              "internalType": "uint256",
                              "name": "max",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Range",
                          "name": "intentAmountRange",
                          "type": "tuple"
                        },
                        {
                          "internalType": "bool",
                          "name": "acceptingIntents",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "remainingDeposits",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "outstandingIntentAmount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes32[]",
                          "name": "intentHashes",
                          "type": "bytes32[]"
                        }
                      ],
                      "internalType": "struct IEscrow.Deposit",
                      "name": "deposit",
                      "type": "tuple"
                    },
                    {
                      "internalType": "uint256",
                      "name": "availableLiquidity",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "verifier",
                          "type": "address"
                        },
                        {
                          "components": [
                            {
                              "internalType": "address",
                              "name": "intentGatingService",
                              "type": "address"
                            },
                            {
                              "internalType": "string",
                              "name": "payeeDetails",
                              "type": "string"
                            },
                            {
                              "internalType": "bytes",
                              "name": "data",
                              "type": "bytes"
                            }
                          ],
                          "internalType": "struct IEscrow.DepositVerifierData",
                          "name": "verificationData",
                          "type": "tuple"
                        },
                        {
                          "components": [
                            {
                              "internalType": "bytes32",
                              "name": "code",
                              "type": "bytes32"
                            },
                            {
                              "internalType": "uint256",
                              "name": "conversionRate",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Currency[]",
                          "name": "currencies",
                          "type": "tuple[]"
                        }
                      ],
                      "internalType": "struct IEscrow.VerifierDataView[]",
                      "name": "verifiers",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.DepositView",
                  "name": "deposit",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IEscrow.IntentView",
              "name": "intentView",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32[]",
              "name": "_intentHashes",
              "type": "bytes32[]"
            }
          ],
          "name": "getIntents",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "intentHash",
                  "type": "bytes32"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "paymentVerifier",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "fiatCurrency",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "uint256",
                      "name": "conversionRate",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IEscrow.Intent",
                  "name": "intent",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "depositId",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "depositor",
                          "type": "address"
                        },
                        {
                          "internalType": "contract IERC20",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "components": [
                            {
                              "internalType": "uint256",
                              "name": "min",
                              "type": "uint256"
                            },
                            {
                              "internalType": "uint256",
                              "name": "max",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Range",
                          "name": "intentAmountRange",
                          "type": "tuple"
                        },
                        {
                          "internalType": "bool",
                          "name": "acceptingIntents",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "remainingDeposits",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "outstandingIntentAmount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes32[]",
                          "name": "intentHashes",
                          "type": "bytes32[]"
                        }
                      ],
                      "internalType": "struct IEscrow.Deposit",
                      "name": "deposit",
                      "type": "tuple"
                    },
                    {
                      "internalType": "uint256",
                      "name": "availableLiquidity",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "verifier",
                          "type": "address"
                        },
                        {
                          "components": [
                            {
                              "internalType": "address",
                              "name": "intentGatingService",
                              "type": "address"
                            },
                            {
                              "internalType": "string",
                              "name": "payeeDetails",
                              "type": "string"
                            },
                            {
                              "internalType": "bytes",
                              "name": "data",
                              "type": "bytes"
                            }
                          ],
                          "internalType": "struct IEscrow.DepositVerifierData",
                          "name": "verificationData",
                          "type": "tuple"
                        },
                        {
                          "components": [
                            {
                              "internalType": "bytes32",
                              "name": "code",
                              "type": "bytes32"
                            },
                            {
                              "internalType": "uint256",
                              "name": "conversionRate",
                              "type": "uint256"
                            }
                          ],
                          "internalType": "struct IEscrow.Currency[]",
                          "name": "currencies",
                          "type": "tuple[]"
                        }
                      ],
                      "internalType": "struct IEscrow.VerifierDataView[]",
                      "name": "verifiers",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct IEscrow.DepositView",
                  "name": "deposit",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IEscrow.IntentView[]",
              "name": "intentArray",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_depositId",
              "type": "uint256"
            }
          ],
          "name": "getPrunableIntents",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "prunableIntents",
              "type": "bytes32[]"
            },
            {
              "internalType": "uint256",
              "name": "reclaimedAmount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "intentExpirationPeriod",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "intents",
          "outputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "depositId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "paymentVerifier",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "fiatCurrency",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "conversionRate",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "pauseEscrow",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "paused",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "paymentVerifierFeeShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_intentHash",
              "type": "bytes32"
            }
          ],
          "name": "releaseFundsToPayer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            }
          ],
          "name": "removeWhitelistedPaymentVerifier",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_intentExpirationPeriod",
              "type": "uint256"
            }
          ],
          "name": "setIntentExpirationPeriod",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
            }
          ],
          "name": "setSustainabilityFee",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeRecipient",
              "type": "address"
            }
          ],
          "name": "setSustainabilityFeeRecipient",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_depositId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "_fiatCurrency",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "_gatingServiceSignature",
              "type": "bytes"
            }
          ],
          "name": "signalIntent",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "sustainabilityFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "sustainabilityFeeRecipient",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "unpauseEscrow",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "_acceptAllPaymentVerifiers",
              "type": "bool"
            }
          ],
          "name": "updateAcceptAllPaymentVerifiers",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_depositId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "_fiatCurrency",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "_newConversionRate",
              "type": "uint256"
            }
          ],
          "name": "updateDepositConversionRate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_feeShare",
              "type": "uint256"
            }
          ],
          "name": "updatePaymentVerifierFeeShare",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "whitelistedPaymentVerifiers",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_depositId",
              "type": "uint256"
            }
          ],
          "name": "withdrawDeposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    "MercadoPagoReclaimVerifier": {
      "address": "0xf2AC5be14F32Cbe6A613CFF8931d95460D6c33A3",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETE_PAYMENT_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "ONLINE_TRANSFER_TYPE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "P2P_PAYMENT_TYPE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "MonzoReclaimVerifier": {
      "address": "0x0dE46433bD251027f73eD8f28E01eF05DA36a2E0",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "NullifierRegistry": {
      "address": "0x27B4A4542af8EefB7eBf574a562C5D4DaA17137F",
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "nullifier",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "writer",
              "type": "address"
            }
          ],
          "name": "NullifierAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "writer",
              "type": "address"
            }
          ],
          "name": "WriterAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "writer",
              "type": "address"
            }
          ],
          "name": "WriterRemoved",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_nullifier",
              "type": "bytes32"
            }
          ],
          "name": "addNullifier",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_newWriter",
              "type": "address"
            }
          ],
          "name": "addWritePermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getWriters",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isNullified",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "isWriter",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_removedWriter",
              "type": "address"
            }
          ],
          "name": "removeWritePermission",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "writers",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
    },
    "PaypalReclaimVerifier": {
      "address": "0x03d17E9371C858072E171276979f6B44571C5DeA",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETE_PAYMENT_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "RevolutReclaimVerifier": {
      "address": "0xAA5A1B62B01781E789C900d616300717CD9A41aB",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETE_PAYMENT_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "VenmoReclaimVerifier": {
      "address": "0x9a733B55a875D0DB4915c6B36350b24F8AB99dF5",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "WiseReclaimVerifier": {
      "address": "0xFF0149799631D7A5bdE2e7eA9b306c42b3d9a9ca",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETE_PAYMENT_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "ZelleBaseVerifier": {
      "address": "0x431a078A5029146aAB239c768A615CD484519aF7",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_escrow",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "_currencies",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "CurrencyRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint8",
              "name": "paymentMethod",
              "type": "uint8"
            }
          ],
          "name": "PaymentMethodVerifierRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint8",
              "name": "paymentMethod",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            }
          ],
          "name": "PaymentMethodVerifierSet",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "addCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "escrow",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getCurrencies",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "isCurrency",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "name": "paymentMethodToVerifier",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_currencyCode",
              "type": "bytes32"
            }
          ],
          "name": "removeCurrency",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_paymentMethod",
              "type": "uint8"
            }
          ],
          "name": "removePaymentMethodVerifier",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "_paymentMethod",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "_verifier",
              "type": "address"
            }
          ],
          "name": "setPaymentMethodVerifier",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    "ZelleBoAReclaimVerifier": {
      "address": "0x809c7A20A2dbBB3210fC73Dd7C01Cd7Fa70C195F",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_baseVerifier",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newTimestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETED_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "baseVerifier",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "ZelleChaseReclaimVerifier": {
      "address": "0xBcD7C6BBcA5869fBefe3E322263EE1090221D7A9",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_baseVerifier",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newTimestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "COMPLETED_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DELIVERED_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "baseVerifier",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    },
    "ZelleCitiReclaimVerifier": {
      "address": "0x3128BadC46Dbe2E37BDd2d64F33fB3B3a639570E",
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_baseVerifier",
              "type": "address"
            },
            {
              "internalType": "contract INullifierRegistry",
              "name": "_nullifierRegistry",
              "type": "address"
            },
            {
              "internalType": "string[]",
              "name": "_providerHashes",
              "type": "string[]"
            },
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "providerHash",
              "type": "string"
            }
          ],
          "name": "ProviderHashRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newTimestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "TimestampBufferSet",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DELIVERED_STATUS",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_newProviderHash",
              "type": "string"
            }
          ],
          "name": "addProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "baseVerifier",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getProviderHashes",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "isProviderHash",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nullifierRegistry",
          "outputs": [
            {
              "internalType": "contract INullifierRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "providerHashes",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_removeProviderHash",
              "type": "string"
            }
          ],
          "name": "removeProviderHash",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_timestampBuffer",
              "type": "uint256"
            }
          ],
          "name": "setTimestampBuffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "timestampBuffer",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "paymentProof",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "intentAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "intentTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "payeeDetails",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "fiatCurrency",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "conversionRate",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IPaymentVerifier.VerifyPaymentData",
              "name": "_verifyPaymentData",
              "type": "tuple"
            }
          ],
          "name": "verifyPayment",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "string",
                      "name": "provider",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "parameters",
                      "type": "string"
                    },
                    {
                      "internalType": "string",
                      "name": "context",
                      "type": "string"
                    }
                  ],
                  "internalType": "struct Claims.ClaimInfo",
                  "name": "claimInfo",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "bytes32",
                          "name": "identifier",
                          "type": "bytes32"
                        },
                        {
                          "internalType": "address",
                          "name": "owner",
                          "type": "address"
                        },
                        {
                          "internalType": "uint32",
                          "name": "timestampS",
                          "type": "uint32"
                        },
                        {
                          "internalType": "uint32",
                          "name": "epoch",
                          "type": "uint32"
                        }
                      ],
                      "internalType": "struct Claims.CompleteClaimData",
                      "name": "claim",
                      "type": "tuple"
                    },
                    {
                      "internalType": "bytes[]",
                      "name": "signatures",
                      "type": "bytes[]"
                    }
                  ],
                  "internalType": "struct Claims.SignedClaim",
                  "name": "signedClaim",
                  "type": "tuple"
                },
                {
                  "internalType": "bool",
                  "name": "isAppclipProof",
                  "type": "bool"
                }
              ],
              "internalType": "struct IReclaimVerifier.ReclaimProof",
              "name": "proof",
              "type": "tuple"
            },
            {
              "internalType": "address[]",
              "name": "_witnesses",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "_requiredThreshold",
              "type": "uint256"
            }
          ],
          "name": "verifyProofSignatures",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        }
      ]
    }
  }
} as const;