/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface DatastoreInterface extends utils.Interface {
  functions: {
    "CreateUpdateMatches(string,string)": FunctionFragment;
    "CreateUpdateTeam(string,string)": FunctionFragment;
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
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "CreateUpdateTeam",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
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
      matchesIpfsUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      playersIpfsUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;
  };

  CreateUpdateMatches(
    date: PromiseOrValue<string>,
    matchesIpfsUrl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  CreateUpdateTeam(
    team: PromiseOrValue<string>,
    playersIpfsUrl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  GetMatches(
    date: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  GetTeamPlayers(
    team: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  callStatic: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchesIpfsUrl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      playersIpfsUrl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    GetMatches(
      date: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    GetTeamPlayers(
      team: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;
  };

  filters: {};

  estimateGas: {
    CreateUpdateMatches(
      date: PromiseOrValue<string>,
      matchesIpfsUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      playersIpfsUrl: PromiseOrValue<string>,
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
      matchesIpfsUrl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    CreateUpdateTeam(
      team: PromiseOrValue<string>,
      playersIpfsUrl: PromiseOrValue<string>,
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
