/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type NewZombie = ContractEventLog<{
  zombieId: string;
  name: string;
  dna: string;
  0: string;
  1: string;
  2: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface ZombieAttack extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ZombieAttack;
  clone(): ZombieAttack;
  methods: {
    attack(
      _zombieId: number | string | BN,
      _targetZombieId: number | string | BN
    ): NonPayableTransactionObject<void>;

    changeDna(
      _zombieId: number | string | BN,
      _newDna: number | string | BN
    ): NonPayableTransactionObject<void>;

    changeName(
      _zombieId: number | string | BN,
      _newName: string
    ): NonPayableTransactionObject<void>;

    createRandomZombie(_name: string): NonPayableTransactionObject<void>;

    feedOnKitty(
      _zombieId: number | string | BN,
      _kittyId: number | string | BN
    ): NonPayableTransactionObject<void>;

    getZombiesByOwner(_owner: string): NonPayableTransactionObject<string[]>;

    getZombiesDetailByOwner(
      _owner: string
    ): NonPayableTransactionObject<
      [string, string, string, string, string, string][]
    >;

    levelUp(_zombieId: number | string | BN): PayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    setKittyContractAddress(
      _ckAddress: string
    ): NonPayableTransactionObject<void>;

    setLevelUpFee(
      _fee: number | string | BN
    ): NonPayableTransactionObject<void>;

    testAccessContract(): NonPayableTransactionObject<string>;

    testShowZombieList(): NonPayableTransactionObject<
      [string, string, string, string, string, string][]
    >;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    withdraw(): NonPayableTransactionObject<void>;

    zombieToOwner(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    zombies(arg0: number | string | BN): NonPayableTransactionObject<{
      name: string;
      dna: string;
      level: string;
      readyTime: string;
      winCount: string;
      loseCount: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    }>;
  };
  events: {
    NewZombie(cb?: Callback<NewZombie>): EventEmitter;
    NewZombie(options?: EventOptions, cb?: Callback<NewZombie>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewZombie", cb: Callback<NewZombie>): void;
  once(
    event: "NewZombie",
    options: EventOptions,
    cb: Callback<NewZombie>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
