/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Datastore {
  export type MatchesStruct = {
    name: PromiseOrValue<string>;
    teamA: PromiseOrValue<string>;
    teamB: PromiseOrValue<string>;
    startDateTime: PromiseOrValue<BigNumberish>;
    endDateTime: PromiseOrValue<BigNumberish>;
    metadata: PromiseOrValue<string>;
    isRunning: PromiseOrValue<boolean>;
    isOpen: PromiseOrValue<boolean>;
    isFinished: PromiseOrValue<boolean>;
  };

  export type MatchesStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean,
    boolean,
    boolean
  ] & {
    name: string;
    teamA: string;
    teamB: string;
    startDateTime: BigNumber;
    endDateTime: BigNumber;
    metadata: string;
    isRunning: boolean;
    isOpen: boolean;
    isFinished: boolean;
  };

  export type PlayersDataStruct = {
    name: PromiseOrValue<string>;
    metadata: PromiseOrValue<string>;
    rating: PromiseOrValue<BigNumberish>;
    role: PromiseOrValue<string>;
    inSquad: PromiseOrValue<boolean>;
    isPlaying: PromiseOrValue<boolean>;
  };

  export type PlayersDataStructOutput = [
    string,
    string,
    number,
    string,
    boolean,
    boolean
  ] & {
    name: string;
    metadata: string;
    rating: number;
    role: string;
    inSquad: boolean;
    isPlaying: boolean;
  };
}

export interface DatastoreInterface extends utils.Interface {
  functions: {
    "CreateUpdateMatches(string,string,string,string,uint256,uint256,string,bool,bool,bool)": FunctionFragment;
    "CreateUpdateTeam(string,string,string,uint16,string,bool,bool)": FunctionFragment;
    "GetMatches(string)": FunctionFragment;
    "GetTeamPlayers(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CreateUpdateMatches"
      | "CreateUpdateTeam"
      | "GetMatches"
      | "GetTeamPlayers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CreateUpdateMatches",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "CreateUpdateTeam",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "GetMatches",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetTeamPlayers",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "CreateUpdateMatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CreateUpdateTeam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GetMatches", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetTeamPlayers",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Datastore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DatastoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchName: PromiseOrValue<string>,
      teamA: PromiseOrValue<string>,
      teamB: PromiseOrValue<string>,
      startTs: PromiseOrValue<BigNumberish>,
      endTs: PromiseOrValue<BigNumberish>,
      matchMeta: PromiseOrValue<string>,
      isRunning: PromiseOrValue<boolean>,
      isOpen: PromiseOrValue<boolean>,
      isFinished: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      pName: PromiseOrValue<string>,
      pMetadata: PromiseOrValue<string>,
      pRating: PromiseOrValue<BigNumberish>,
      pRole: PromiseOrValue<string>,
      inSquad: PromiseOrValue<boolean>,
      isPlaying: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Datastore.MatchesStructOutput[]]>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Datastore.PlayersDataStructOutput[]]>;
  };

  CreateUpdateMatches(
    date: PromiseOrValue<string>,
    matchName: PromiseOrValue<string>,
    teamA: PromiseOrValue<string>,
    teamB: PromiseOrValue<string>,
    startTs: PromiseOrValue<BigNumberish>,
    endTs: PromiseOrValue<BigNumberish>,
    matchMeta: PromiseOrValue<string>,
    isRunning: PromiseOrValue<boolean>,
    isOpen: PromiseOrValue<boolean>,
    isFinished: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  CreateUpdateTeam(
    team: PromiseOrValue<string>,
    pName: PromiseOrValue<string>,
    pMetadata: PromiseOrValue<string>,
    pRating: PromiseOrValue<BigNumberish>,
    pRole: PromiseOrValue<string>,
    inSquad: PromiseOrValue<boolean>,
    isPlaying: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  GetMatches(
    date: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Datastore.MatchesStructOutput[]>;

  GetTeamPlayers(
    team: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Datastore.PlayersDataStructOutput[]>;

  callStatic: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchName: PromiseOrValue<string>,
      teamA: PromiseOrValue<string>,
      teamB: PromiseOrValue<string>,
      startTs: PromiseOrValue<BigNumberish>,
      endTs: PromiseOrValue<BigNumberish>,
      matchMeta: PromiseOrValue<string>,
      isRunning: PromiseOrValue<boolean>,
      isOpen: PromiseOrValue<boolean>,
      isFinished: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<Datastore.MatchesStructOutput>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      pName: PromiseOrValue<string>,
      pMetadata: PromiseOrValue<string>,
      pRating: PromiseOrValue<BigNumberish>,
      pRole: PromiseOrValue<string>,
      inSquad: PromiseOrValue<boolean>,
      isPlaying: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<Datastore.PlayersDataStructOutput>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Datastore.MatchesStructOutput[]>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Datastore.PlayersDataStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchName: PromiseOrValue<string>,
      teamA: PromiseOrValue<string>,
      teamB: PromiseOrValue<string>,
      startTs: PromiseOrValue<BigNumberish>,
      endTs: PromiseOrValue<BigNumberish>,
      matchMeta: PromiseOrValue<string>,
      isRunning: PromiseOrValue<boolean>,
      isOpen: PromiseOrValue<boolean>,
      isFinished: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      pName: PromiseOrValue<string>,
      pMetadata: PromiseOrValue<string>,
      pRating: PromiseOrValue<BigNumberish>,
      pRole: PromiseOrValue<string>,
      inSquad: PromiseOrValue<boolean>,
      isPlaying: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchName: PromiseOrValue<string>,
      teamA: PromiseOrValue<string>,
      teamB: PromiseOrValue<string>,
      startTs: PromiseOrValue<BigNumberish>,
      endTs: PromiseOrValue<BigNumberish>,
      matchMeta: PromiseOrValue<string>,
      isRunning: PromiseOrValue<boolean>,
      isOpen: PromiseOrValue<boolean>,
      isFinished: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      pName: PromiseOrValue<string>,
      pMetadata: PromiseOrValue<string>,
      pRating: PromiseOrValue<BigNumberish>,
      pRole: PromiseOrValue<string>,
      inSquad: PromiseOrValue<boolean>,
      isPlaying: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
