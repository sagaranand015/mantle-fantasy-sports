/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Datastore, DatastoreInterface } from "../Datastore";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "string",
        name: "matchName",
        type: "string",
      },
      {
        internalType: "string",
        name: "teamA",
        type: "string",
      },
      {
        internalType: "string",
        name: "teamB",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTs",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "matchMeta",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRunning",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
    ],
    name: "CreateUpdateMatches",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "teamA",
            type: "string",
          },
          {
            internalType: "string",
            name: "teamB",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "startDateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDateTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRunning",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isOpen",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
        ],
        internalType: "struct Datastore.matches",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "team",
        type: "string",
      },
      {
        internalType: "string",
        name: "pName",
        type: "string",
      },
      {
        internalType: "string",
        name: "pMetadata",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "pRating",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "pRole",
        type: "string",
      },
      {
        internalType: "bool",
        name: "inSquad",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isPlaying",
        type: "bool",
      },
    ],
    name: "CreateUpdateTeam",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "rating",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "role",
            type: "string",
          },
          {
            internalType: "bool",
            name: "inSquad",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isPlaying",
            type: "bool",
          },
        ],
        internalType: "struct Datastore.playersData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
    ],
    name: "GetMatches",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "teamA",
            type: "string",
          },
          {
            internalType: "string",
            name: "teamB",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "startDateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDateTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRunning",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isOpen",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
        ],
        internalType: "struct Datastore.matches[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "team",
        type: "string",
      },
    ],
    name: "GetTeamPlayers",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "rating",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "role",
            type: "string",
          },
          {
            internalType: "bool",
            name: "inSquad",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isPlaying",
            type: "bool",
          },
        ],
        internalType: "struct Datastore.playersData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061279d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063732ea7081461005157806378aec66914610081578063866242e7146100b1578063ceea1f4d146100e1575b600080fd5b61006b600480360381019061006691906118d0565b610111565b6040516100789190611b29565b60405180910390f35b61009b60048036038101906100969190611bad565b61039a565b6040516100a89190611e01565b60405180910390f35b6100cb60048036038101906100c691906118d0565b610a64565b6040516100d89190611fbf565b60405180910390f35b6100fb60048036038101906100f6919061200d565b610d8f565b60405161010891906121b6565b60405180910390f35b60606000826040516101239190612214565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b8282101561038f57838290600052602060002090600502016040518060c00160405290816000820180546101849061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546101b09061225a565b80156101fd5780601f106101d2576101008083540402835291602001916101fd565b820191906000526020600020905b8154815290600101906020018083116101e057829003601f168201915b505050505081526020016001820180546102169061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546102429061225a565b801561028f5780601f106102645761010080835404028352916020019161028f565b820191906000526020600020905b81548152906001019060200180831161027257829003601f168201915b505050505081526020016002820160009054906101000a900461ffff1661ffff1661ffff1681526020016003820180546102c89061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546102f49061225a565b80156103415780601f1061031657610100808354040283529160200191610341565b820191906000526020600020905b81548152906001019060200180831161032457829003601f168201915b505050505081526020016004820160009054906101000a900460ff161515151581526020016004820160019054906101000a900460ff16151515158152505081526020019060010190610151565b505050509050919050565b6103a26112f9565b600060018c6040516103b49190612214565b9081526020016040518091039020905060005b81805490508110156108dd578b805190602001208282815481106103ee576103ed61228b565b5b906000526020600020906007020160000160405161040c919061235d565b6040518091039020036108ca578b82828154811061042d5761042c61228b565b5b9060005260206000209060070201600001908161044a9190612520565b508a82828154811061045f5761045e61228b565b5b9060005260206000209060070201600101908161047c9190612520565b50898282815481106104915761049061228b565b5b906000526020600020906007020160020190816104ae9190612520565b50888282815481106104c3576104c261228b565b5b906000526020600020906007020160030181905550878282815481106104ec576104eb61228b565b5b906000526020600020906007020160040181905550868282815481106105155761051461228b565b5b906000526020600020906007020160050190816105329190612520565b50858282815481106105475761054661228b565b5b906000526020600020906007020160060160006101000a81548160ff021916908315150217905550848282815481106105835761058261228b565b5b906000526020600020906007020160060160016101000a81548160ff021916908315150217905550838282815481106105bf576105be61228b565b5b906000526020600020906007020160060160026101000a81548160ff0219169083151502179055508181815481106105fa576105f961228b565b5b9060005260206000209060070201604051806101200160405290816000820180546106249061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546106509061225a565b801561069d5780601f106106725761010080835404028352916020019161069d565b820191906000526020600020905b81548152906001019060200180831161068057829003601f168201915b505050505081526020016001820180546106b69061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546106e29061225a565b801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b505050505081526020016002820180546107489061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546107749061225a565b80156107c15780601f10610796576101008083540402835291602001916107c1565b820191906000526020600020905b8154815290600101906020018083116107a457829003601f168201915b5050505050815260200160038201548152602001600482015481526020016005820180546107ee9061225a565b80601f016020809104026020016040519081016040528092919081815260200182805461081a9061225a565b80156108675780601f1061083c57610100808354040283529160200191610867565b820191906000526020600020905b81548152906001019060200180831161084a57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff161515151581526020016006820160029054906101000a900460ff16151515158152505092505050610a56565b80806108d590612621565b9150506103c7565b5060006040518061012001604052808d81526020018c81526020018b81526020018a81526020018981526020018881526020018715158152602001861515815260200185151581525090508181908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000190816109689190612520565b50602082015181600101908161097e9190612520565b5060408201518160020190816109949190612520565b50606082015181600301556080820151816004015560a08201518160050190816109be9190612520565b5060c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff0219169083151502179055506101008201518160060160026101000a81548160ff02191690831515021790555050508160018e604051610a339190612214565b9081526020016040518091039020908054610a4f92919061134b565b5080925050505b9a9950505050505050505050565b6060600182604051610a769190612214565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b82821015610d84578382906000526020600020906007020160405180610120016040529081600082018054610ad89061225a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b049061225a565b8015610b515780601f10610b2657610100808354040283529160200191610b51565b820191906000526020600020905b815481529060010190602001808311610b3457829003601f168201915b50505050508152602001600182018054610b6a9061225a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b969061225a565b8015610be35780601f10610bb857610100808354040283529160200191610be3565b820191906000526020600020905b815481529060010190602001808311610bc657829003601f168201915b50505050508152602001600282018054610bfc9061225a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c289061225a565b8015610c755780601f10610c4a57610100808354040283529160200191610c75565b820191906000526020600020905b815481529060010190602001808311610c5857829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582018054610ca29061225a565b80601f0160208091040260200160405190810160405280929190818152602001828054610cce9061225a565b8015610d1b5780601f10610cf057610100808354040283529160200191610d1b565b820191906000526020600020905b815481529060010190602001808311610cfe57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff161515151581526020016006820160029054906101000a900460ff16151515158152505081526020019060010190610aa4565b505050509050919050565b610d97611492565b60008089604051610da89190612214565b9081526020016040518091039020905060005b81805490508110156111ae578880519060200120828281548110610de257610de161228b565b5b9060005260206000209060050201600001604051610e00919061235d565b60405180910390200361119b5788828281548110610e2157610e2061228b565b5b90600052602060002090600502016000019081610e3e9190612520565b5087828281548110610e5357610e5261228b565b5b90600052602060002090600502016001019081610e709190612520565b5086828281548110610e8557610e8461228b565b5b906000526020600020906005020160020160006101000a81548161ffff021916908361ffff16021790555085828281548110610ec457610ec361228b565b5b90600052602060002090600502016003019081610ee19190612520565b5084828281548110610ef657610ef561228b565b5b906000526020600020906005020160040160006101000a81548160ff02191690831515021790555083828281548110610f3257610f3161228b565b5b906000526020600020906005020160040160016101000a81548160ff021916908315150217905550818181548110610f6d57610f6c61228b565b5b90600052602060002090600502016040518060c0016040529081600082018054610f969061225a565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc29061225a565b801561100f5780601f10610fe45761010080835404028352916020019161100f565b820191906000526020600020905b815481529060010190602001808311610ff257829003601f168201915b505050505081526020016001820180546110289061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546110549061225a565b80156110a15780601f10611076576101008083540402835291602001916110a1565b820191906000526020600020905b81548152906001019060200180831161108457829003601f168201915b505050505081526020016002820160009054906101000a900461ffff1661ffff1661ffff1681526020016003820180546110da9061225a565b80601f01602080910402602001604051908101604052809291908181526020018280546111069061225a565b80156111535780601f1061112857610100808354040283529160200191611153565b820191906000526020600020905b81548152906001019060200180831161113657829003601f168201915b505050505081526020016004820160009054906101000a900460ff161515151581526020016004820160019054906101000a900460ff161515151581525050925050506112ee565b80806111a690612621565b915050610dbb565b5060006040518060c001604052808a81526020018981526020018861ffff168152602001878152602001861515815260200185151581525090508181908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000190816112289190612520565b50602082015181600101908161123e9190612520565b5060408201518160020160006101000a81548161ffff021916908361ffff16021790555060608201518160030190816112779190612520565b5060808201518160040160006101000a81548160ff02191690831515021790555060a08201518160040160016101000a81548160ff02191690831515021790555050508160008b6040516112cb9190612214565b90815260200160405180910390209080546112e79291906114d0565b5080925050505b979650505050505050565b6040518061012001604052806060815260200160608152602001606081526020016000815260200160008152602001606081526020016000151581526020016000151581526020016000151581525090565b8280548282559060005260206000209060070281019282156114815760005260206000209160070282015b8281111561148057828260008201816000019081611394919061267f565b50600182018160010190816113a9919061267f565b50600282018160020190816113be919061267f565b506003820154816003015560048201548160040155600582018160050190816113e7919061267f565b506006820160009054906101000a900460ff168160060160006101000a81548160ff0219169083151502179055506006820160019054906101000a900460ff168160060160016101000a81548160ff0219169083151502179055506006820160029054906101000a900460ff168160060160026101000a81548160ff021916908315150217905550505091600701919060070190611376565b5b50905061148e91906115f2565b5090565b6040518060c001604052806060815260200160608152602001600061ffff168152602001606081526020016000151581526020016000151581525090565b8280548282559060005260206000209060050281019282156115e15760005260206000209160050282015b828111156115e057828260008201816000019081611519919061267f565b506001820181600101908161152e919061267f565b506002820160009054906101000a900461ffff168160020160006101000a81548161ffff021916908361ffff16021790555060038201816003019081611574919061267f565b506004820160009054906101000a900460ff168160040160006101000a81548160ff0219169083151502179055506004820160019054906101000a900460ff168160040160016101000a81548160ff0219169083151502179055505050916005019190600501906114fb565b5b5090506115ee9190611695565b5090565b5b80821115611691576000808201600061160c9190611719565b60018201600061161c9190611719565b60028201600061162c9190611719565b6003820160009055600482016000905560058201600061164c9190611719565b6006820160006101000a81549060ff02191690556006820160016101000a81549060ff02191690556006820160026101000a81549060ff0219169055506007016115f3565b5090565b5b8082111561171557600080820160006116af9190611719565b6001820160006116bf9190611719565b6002820160006101000a81549061ffff02191690556003820160006116e49190611719565b6004820160006101000a81549060ff02191690556004820160016101000a81549060ff021916905550600501611696565b5090565b5080546117259061225a565b6000825580601f106117375750611756565b601f0160209004906000526020600020908101906117559190611759565b5b50565b5b8082111561177257600081600090555060010161175a565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117dd82611794565b810181811067ffffffffffffffff821117156117fc576117fb6117a5565b5b80604052505050565b600061180f611776565b905061181b82826117d4565b919050565b600067ffffffffffffffff82111561183b5761183a6117a5565b5b61184482611794565b9050602081019050919050565b82818337600083830152505050565b600061187361186e84611820565b611805565b90508281526020810184848401111561188f5761188e61178f565b5b61189a848285611851565b509392505050565b600082601f8301126118b7576118b661178a565b5b81356118c7848260208601611860565b91505092915050565b6000602082840312156118e6576118e5611780565b5b600082013567ffffffffffffffff81111561190457611903611785565b5b611910848285016118a2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561197f578082015181840152602081019050611964565b60008484015250505050565b600061199682611945565b6119a08185611950565b93506119b0818560208601611961565b6119b981611794565b840191505092915050565b600061ffff82169050919050565b6119db816119c4565b82525050565b60008115159050919050565b6119f6816119e1565b82525050565b600060c0830160008301518482036000860152611a19828261198b565b91505060208301518482036020860152611a33828261198b565b9150506040830151611a4860408601826119d2565b5060608301518482036060860152611a60828261198b565b9150506080830151611a7560808601826119ed565b5060a0830151611a8860a08601826119ed565b508091505092915050565b6000611a9f83836119fc565b905092915050565b6000602082019050919050565b6000611abf82611919565b611ac98185611924565b935083602082028501611adb85611935565b8060005b85811015611b175784840389528151611af88582611a93565b9450611b0383611aa7565b925060208a01995050600181019050611adf565b50829750879550505050505092915050565b60006020820190508181036000830152611b438184611ab4565b905092915050565b6000819050919050565b611b5e81611b4b565b8114611b6957600080fd5b50565b600081359050611b7b81611b55565b92915050565b611b8a816119e1565b8114611b9557600080fd5b50565b600081359050611ba781611b81565b92915050565b6000806000806000806000806000806101408b8d031215611bd157611bd0611780565b5b60008b013567ffffffffffffffff811115611bef57611bee611785565b5b611bfb8d828e016118a2565b9a505060208b013567ffffffffffffffff811115611c1c57611c1b611785565b5b611c288d828e016118a2565b99505060408b013567ffffffffffffffff811115611c4957611c48611785565b5b611c558d828e016118a2565b98505060608b013567ffffffffffffffff811115611c7657611c75611785565b5b611c828d828e016118a2565b9750506080611c938d828e01611b6c565b96505060a0611ca48d828e01611b6c565b95505060c08b013567ffffffffffffffff811115611cc557611cc4611785565b5b611cd18d828e016118a2565b94505060e0611ce28d828e01611b98565b935050610100611cf48d828e01611b98565b925050610120611d068d828e01611b98565b9150509295989b9194979a5092959850565b611d2181611b4b565b82525050565b6000610120830160008301518482036000860152611d45828261198b565b91505060208301518482036020860152611d5f828261198b565b91505060408301518482036040860152611d79828261198b565b9150506060830151611d8e6060860182611d18565b506080830151611da16080860182611d18565b5060a083015184820360a0860152611db9828261198b565b91505060c0830151611dce60c08601826119ed565b5060e0830151611de160e08601826119ed565b50610100830151611df66101008601826119ed565b508091505092915050565b60006020820190508181036000830152611e1b8184611d27565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610120830160008301518482036000860152611e6d828261198b565b91505060208301518482036020860152611e87828261198b565b91505060408301518482036040860152611ea1828261198b565b9150506060830151611eb66060860182611d18565b506080830151611ec96080860182611d18565b5060a083015184820360a0860152611ee1828261198b565b91505060c0830151611ef660c08601826119ed565b5060e0830151611f0960e08601826119ed565b50610100830151611f1e6101008601826119ed565b508091505092915050565b6000611f358383611e4f565b905092915050565b6000602082019050919050565b6000611f5582611e23565b611f5f8185611e2e565b935083602082028501611f7185611e3f565b8060005b85811015611fad5784840389528151611f8e8582611f29565b9450611f9983611f3d565b925060208a01995050600181019050611f75565b50829750879550505050505092915050565b60006020820190508181036000830152611fd98184611f4a565b905092915050565b611fea816119c4565b8114611ff557600080fd5b50565b60008135905061200781611fe1565b92915050565b600080600080600080600060e0888a03121561202c5761202b611780565b5b600088013567ffffffffffffffff81111561204a57612049611785565b5b6120568a828b016118a2565b975050602088013567ffffffffffffffff81111561207757612076611785565b5b6120838a828b016118a2565b965050604088013567ffffffffffffffff8111156120a4576120a3611785565b5b6120b08a828b016118a2565b95505060606120c18a828b01611ff8565b945050608088013567ffffffffffffffff8111156120e2576120e1611785565b5b6120ee8a828b016118a2565b93505060a06120ff8a828b01611b98565b92505060c06121108a828b01611b98565b91505092959891949750929550565b600060c083016000830151848203600086015261213c828261198b565b91505060208301518482036020860152612156828261198b565b915050604083015161216b60408601826119d2565b5060608301518482036060860152612183828261198b565b915050608083015161219860808601826119ed565b5060a08301516121ab60a08601826119ed565b508091505092915050565b600060208201905081810360008301526121d0818461211f565b905092915050565b600081905092915050565b60006121ee82611945565b6121f881856121d8565b9350612208818560208601611961565b80840191505092915050565b600061222082846121e3565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061227257607f821691505b6020821081036122855761228461222b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b60008190508160005260206000209050919050565b600081546122e78161225a565b6122f181866122ba565b9450600182166000811461230c576001811461232157612354565b60ff1983168652811515820286019350612354565b61232a856122c5565b60005b8381101561234c5781548189015260018201915060208101905061232d565b838801955050505b50505092915050565b600061236982846122da565b915081905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026123d67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612399565b6123e08683612399565b95508019841693508086168417925050509392505050565b6000819050919050565b600061241d61241861241384611b4b565b6123f8565b611b4b565b9050919050565b6000819050919050565b61243783612402565b61244b61244382612424565b8484546123a6565b825550505050565b600090565b612460612453565b61246b81848461242e565b505050565b5b8181101561248f57612484600082612458565b600181019050612471565b5050565b601f8211156124d4576124a581612374565b6124ae84612389565b810160208510156124bd578190505b6124d16124c985612389565b830182612470565b50505b505050565b600082821c905092915050565b60006124f7600019846008026124d9565b1980831691505092915050565b600061251083836124e6565b9150826002028217905092915050565b61252982611945565b67ffffffffffffffff811115612542576125416117a5565b5b61254c825461225a565b612557828285612493565b600060209050601f83116001811461258a5760008415612578578287015190505b6125828582612504565b8655506125ea565b601f19841661259886612374565b60005b828110156125c05784890151825560018201915060208501945060208101905061259b565b868310156125dd57848901516125d9601f8916826124e6565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061262c82611b4b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361265e5761265d6125f2565b5b600182019050919050565b6000815490506126788161225a565b9050919050565b81810361268d575050612765565b61269682612669565b67ffffffffffffffff8111156126af576126ae6117a5565b5b6126b9825461225a565b6126c4828285612493565b6000601f8311600181146126f357600084156126e1578287015490505b6126eb8582612504565b86555061275e565b601f19841661270187612374565b965061270c86612374565b60005b828110156127345784890154825560018201915060018501945060208101905061270f565b86831015612751578489015461274d601f8916826124e6565b8355505b6001600288020188555050505b5050505050505b56fea2646970667358221220d3aded0c39aa984217d168ded5b069bac0631c16c436e5425ef53c52f3b8781364736f6c63430008110033";

type DatastoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DatastoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Datastore__factory extends ContractFactory {
  constructor(...args: DatastoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Datastore> {
    return super.deploy(overrides || {}) as Promise<Datastore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Datastore {
    return super.attach(address) as Datastore;
  }
  override connect(signer: Signer): Datastore__factory {
    return super.connect(signer) as Datastore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DatastoreInterface {
    return new utils.Interface(_abi) as DatastoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Datastore {
    return new Contract(address, _abi, signerOrProvider) as Datastore;
  }
}
