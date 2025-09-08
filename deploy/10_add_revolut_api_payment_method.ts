import "module-alias/register";

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

import {
  MULTI_SIG,
} from "../deployments/parameters";
import {
  getDeployedContractAddress,
  addPaymentMethodToRegistry,
  addPaymentMethodToUnifiedVerifier,
  savePaymentMethodSnapshot
} from "../deployments/helpers";
import {
  getRevolutApiProviderHashes,
  REVOLUT_API_CURRENCIES,
  REVOLUT_API_TIMESTAMP_BUFFER,
  REVOLUT_API_PAYMENT_METHOD_HASH,
} from "../deployments/verifiers/revolut_api";

// Deployment Scripts
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = await hre.deployments
  const network = hre.deployments.getNetworkName();

  const [deployer] = await hre.getUnnamedAccounts();
  const multiSig = MULTI_SIG[network] ? MULTI_SIG[network] : deployer;

  const paymentVerifierRegistryAddress = getDeployedContractAddress(network, "PaymentVerifierRegistry");
  const unifiedVerifierAddress = getDeployedContractAddress(network, "UnifiedPaymentVerifier");

  // Add Revolut API to payment method registry
  const paymentVerifierRegistryContract = await ethers.getContractAt(
    "PaymentVerifierRegistry", paymentVerifierRegistryAddress
  );
  await addPaymentMethodToRegistry(
    hre,
    paymentVerifierRegistryContract,
    REVOLUT_API_PAYMENT_METHOD_HASH,
    unifiedVerifierAddress,
    REVOLUT_API_CURRENCIES
  );
  console.log("Revolut API added to payment method registry...");

  // Get dual provider hashes for Revolut Business API
  const providerHashes = getRevolutApiProviderHashes();
  console.log("Revolut API provider hashes:", providerHashes);

  // Snapshot provider hashes
  savePaymentMethodSnapshot(network, 'revolut-api', {
    paymentMethodHash: REVOLUT_API_PAYMENT_METHOD_HASH,
    providerHashes,
    currencies: REVOLUT_API_CURRENCIES,
    timestampBuffer: REVOLUT_API_TIMESTAMP_BUFFER
  });

  // Add Revolut API to unified verifier
  const unifiedVerifierContract = await ethers.getContractAt(
    "UnifiedPaymentVerifier", unifiedVerifierAddress
  );
  await addPaymentMethodToUnifiedVerifier(
    hre,
    unifiedVerifierContract,
    REVOLUT_API_PAYMENT_METHOD_HASH,
    REVOLUT_API_TIMESTAMP_BUFFER,
    providerHashes
  );
  console.log("Revolut API added to unified verifier...");
};

func.skip = async (hre: HardhatRuntimeEnvironment): Promise<boolean> => {
  return false;
};

export default func;