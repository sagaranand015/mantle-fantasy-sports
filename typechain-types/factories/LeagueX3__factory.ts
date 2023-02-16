/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LeagueX3, LeagueX3Interface } from "../LeagueX3";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "matchName",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadata",
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
        internalType: "bool",
        name: "isRunning",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "leaguePrice",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "squadLimit",
        type: "uint8",
      },
    ],
    name: "CreateUpdateLeague",
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
            name: "img",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadata",
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
            internalType: "bool",
            name: "isRunning",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "leaguePrice",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "squadLimit",
            type: "uint8",
          },
        ],
        internalType: "struct LeagueX3.leagueData",
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
        name: "matchCid",
        type: "string",
      },
    ],
    name: "GetLeagues",
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
            name: "img",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadata",
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
            internalType: "bool",
            name: "isRunning",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "leaguePrice",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "squadLimit",
            type: "uint8",
          },
        ],
        internalType: "struct LeagueX3.leagueData[]",
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
        internalType: "address",
        name: "user_addr",
        type: "address",
      },
    ],
    name: "get_all_user_participation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "leagueName",
            type: "string",
          },
          {
            internalType: "string",
            name: "squads",
            type: "string",
          },
        ],
        internalType: "struct LeagueX3.userLeagueData[]",
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
        internalType: "address",
        name: "user_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "leagueName",
        type: "string",
      },
    ],
    name: "get_user_league_participation",
    outputs: [
      {
        internalType: "address",
        name: "u_addr",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "leagueName",
            type: "string",
          },
          {
            internalType: "string",
            name: "squads",
            type: "string",
          },
        ],
        internalType: "struct LeagueX3.userLeagueData",
        name: "u_league",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "leagueName",
        type: "string",
      },
      {
        internalType: "string",
        name: "squadLink",
        type: "string",
      },
    ],
    name: "user_participate",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "leagueName",
            type: "string",
          },
          {
            internalType: "string",
            name: "squads",
            type: "string",
          },
        ],
        internalType: "struct LeagueX3.userLeagueData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405273dec6df558e198a7745acbe881f61b3506d59cfc4600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100c857600080fd5b50612ce5806100d86000396000f3fe60806040526004361061004a5760003560e01c806360aeab721461004f5780639f60dccc1461008c578063b55954fe146100bd578063c4a2aef1146100fb578063ef19998814610138575b600080fd5b34801561005b57600080fd5b5061007660048036038101906100719190611d47565b610176565b6040516100839190612077565b60405180910390f35b6100a660048036038101906100a191906120f7565b610a1b565b6040516100b49291906121d5565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190612205565b610f06565b6040516100f29291906121d5565b60405180910390f35b34801561010757600080fd5b50610122600480360381019061011d9190612261565b611124565b60405161012f9190612469565b60405180910390f35b34801561014457600080fd5b5061015f600480360381019061015a919061248b565b611587565b60405161016d9291906125be565b60405180910390f35b61017e611751565b6000808c60405161018f919061262a565b9081526020016040518091039020905060005b8180549050811015610846578b805190602001208282815481106101c9576101c8612641565b5b90600052602060002090600702016000016040516101e79190612773565b604051809103902003610833578b82828154811061020857610207612641565b5b906000526020600020906007020160000190816102259190612940565b508a82828154811061023a57610239612641565b5b906000526020600020906007020160010190816102579190612940565b508982828154811061026c5761026b612641565b5b906000526020600020906007020160020190816102899190612940565b508c82828154811061029e5761029d612641565b5b906000526020600020906007020160030190816102bb9190612940565b50888282815481106102d0576102cf612641565b5b906000526020600020906007020160040190816102ed9190612940565b508782828154811061030257610301612641565b5b9060005260206000209060070201600501908161031f9190612940565b508682828154811061033457610333612641565b5b906000526020600020906007020160060160006101000a81548160ff021916908315150217905550858282815481106103705761036f612641565b5b906000526020600020906007020160060160016101000a81548160ff021916908315150217905550848282815481106103ac576103ab612641565b5b906000526020600020906007020160060160026101000a81548163ffffffff021916908363ffffffff160217905550838282815481106103ef576103ee612641565b5b906000526020600020906007020160060160066101000a81548160ff021916908360ff16021790555081818154811061042b5761042a612641565b5b9060005260206000209060070201604051806101400160405290816000820180546104559061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546104819061269f565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b505050505081526020016001820180546104e79061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546105139061269f565b80156105605780601f1061053557610100808354040283529160200191610560565b820191906000526020600020905b81548152906001019060200180831161054357829003601f168201915b505050505081526020016002820180546105799061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546105a59061269f565b80156105f25780601f106105c7576101008083540402835291602001916105f2565b820191906000526020600020905b8154815290600101906020018083116105d557829003601f168201915b5050505050815260200160038201805461060b9061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546106379061269f565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b5050505050815260200160048201805461069d9061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546106c99061269f565b80156107165780601f106106eb57610100808354040283529160200191610716565b820191906000526020600020905b8154815290600101906020018083116106f957829003601f168201915b5050505050815260200160058201805461072f9061269f565b80601f016020809104026020016040519081016040528092919081815260200182805461075b9061269f565b80156107a85780601f1061077d576101008083540402835291602001916107a8565b820191906000526020600020905b81548152906001019060200180831161078b57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff161515151581526020016006820160029054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016006820160069054906101000a900460ff1660ff1660ff168152505092505050610a0d565b808061083e90612a41565b9150506101a2565b5060006040518061014001604052808d81526020018c81526020018b81526020018e81526020018a8152602001898152602001881515815260200187151581526020018663ffffffff1681526020018560ff1681525090508181908060018154018082558091505060019003906000526020600020906007020160009091909190915060008201518160000190816108de9190612940565b5060208201518160010190816108f49190612940565b50604082015181600201908161090a9190612940565b5060608201518160030190816109209190612940565b5060808201518160040190816109369190612940565b5060a082015181600501908161094c9190612940565b5060c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff0219169083151502179055506101008201518160060160026101000a81548163ffffffff021916908363ffffffff1602179055506101208201518160060160066101000a81548160ff021916908360ff16021790555050508160008e6040516109ea919061262a565b9081526020016040518091039020908054610a069291906117b1565b5080925050505b9a9950505050505050505050565b6000610a25611946565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1634604051610a6e90612aaf565b60006040518083038185875af1925050503d8060008114610aab576040519150601f19603f3d011682016040523d82523d6000602084013e610ab0565b606091505b509150915081610af5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aec90612b21565b60405180910390fd5b6000600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8180549050811015610e31578780519060200120828281548110610b6257610b61612641565b5b9060005260206000209060020201600001604051610b809190612773565b604051809103902003610e1e576000828281548110610ba257610ba1612641565b5b90600052602060002090600202016001018054610bbe9061269f565b80601f0160208091040260200160405190810160405280929190818152602001828054610bea9061269f565b8015610c375780601f10610c0c57610100808354040283529160200191610c37565b820191906000526020600020905b815481529060010190602001808311610c1a57829003601f168201915b50505050509050600081604051602001610c519190612b67565b60405160208183030381529060405290506000818a604051602001610c77929190612b8d565b604051602081830303815290604052905080858581548110610c9c57610c9b612641565b5b90600052602060002090600202016001019081610cb99190612940565b508b858581548110610cce57610ccd612641565b5b906000526020600020906002020180604051806040016040529081600082018054610cf89061269f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d249061269f565b8015610d715780601f10610d4657610100808354040283529160200191610d71565b820191906000526020600020905b815481529060010190602001808311610d5457829003601f168201915b50505050508152602001600182018054610d8a9061269f565b80601f0160208091040260200160405190810160405280929190818152602001828054610db69061269f565b8015610e035780601f10610dd857610100808354040283529160200191610e03565b820191906000526020600020905b815481529060010190602001808311610de657829003601f168201915b50505050508152505090509850985050505050505050610efe565b8080610e2990612a41565b915050610b3b565b5060006040518060400160405280898152602001888152509050818190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000019081610e8b9190612940565b506020820151816001019081610ea19190612940565b50505081600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908054610ef2929190611960565b50888195509550505050505b935093915050565b6000610f10611946565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b818054905081101561111a578480519060200120828281548110610f7d57610f7c612641565b5b9060005260206000209060020201600001604051610f9b9190612773565b6040518091039020036111075785828281548110610fbc57610fbb612641565b5b906000526020600020906002020180604051806040016040529081600082018054610fe69061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546110129061269f565b801561105f5780601f106110345761010080835404028352916020019161105f565b820191906000526020600020905b81548152906001019060200180831161104257829003601f168201915b505050505081526020016001820180546110789061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546110a49061269f565b80156110f15780601f106110c6576101008083540402835291602001916110f1565b820191906000526020600020905b8154815290600101906020018083116110d457829003601f168201915b505050505081525050905093509350505061111d565b808061111290612a41565b915050610f56565b50505b9250929050565b6060600082604051611136919061262a565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b8282101561157c5783829060005260206000209060070201604051806101400160405290816000820180546111989061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546111c49061269f565b80156112115780601f106111e657610100808354040283529160200191611211565b820191906000526020600020905b8154815290600101906020018083116111f457829003601f168201915b5050505050815260200160018201805461122a9061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546112569061269f565b80156112a35780601f10611278576101008083540402835291602001916112a3565b820191906000526020600020905b81548152906001019060200180831161128657829003601f168201915b505050505081526020016002820180546112bc9061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546112e89061269f565b80156113355780601f1061130a57610100808354040283529160200191611335565b820191906000526020600020905b81548152906001019060200180831161131857829003601f168201915b5050505050815260200160038201805461134e9061269f565b80601f016020809104026020016040519081016040528092919081815260200182805461137a9061269f565b80156113c75780601f1061139c576101008083540402835291602001916113c7565b820191906000526020600020905b8154815290600101906020018083116113aa57829003601f168201915b505050505081526020016004820180546113e09061269f565b80601f016020809104026020016040519081016040528092919081815260200182805461140c9061269f565b80156114595780601f1061142e57610100808354040283529160200191611459565b820191906000526020600020905b81548152906001019060200180831161143c57829003601f168201915b505050505081526020016005820180546114729061269f565b80601f016020809104026020016040519081016040528092919081815260200182805461149e9061269f565b80156114eb5780601f106114c0576101008083540402835291602001916114eb565b820191906000526020600020905b8154815290600101906020018083116114ce57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff161515151581526020016006820160029054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016006820160069054906101000a900460ff1660ff1660ff168152505081526020019060010190611164565b505050509050919050565b6000606082600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080805480602002602001604051908101604052809291908181526020016000905b82821015611742578382906000526020600020906002020160405180604001604052908160008201805461161f9061269f565b80601f016020809104026020016040519081016040528092919081815260200182805461164b9061269f565b80156116985780601f1061166d57610100808354040283529160200191611698565b820191906000526020600020905b81548152906001019060200180831161167b57829003601f168201915b505050505081526020016001820180546116b19061269f565b80601f01602080910402602001604051908101604052809291908181526020018280546116dd9061269f565b801561172a5780601f106116ff5761010080835404028352916020019161172a565b820191906000526020600020905b81548152906001019060200180831161170d57829003601f168201915b505050505081525050815260200190600101906115ec565b50505050905091509150915091565b604051806101400160405280606081526020016060815260200160608152602001606081526020016060815260200160608152602001600015158152602001600015158152602001600063ffffffff168152602001600060ff1681525090565b8280548282559060005260206000209060070281019282156119355760005260206000209160070282015b82811115611934578282600082018160000190816117fa9190612bc7565b506001820181600101908161180f9190612bc7565b50600282018160020190816118249190612bc7565b50600382018160030190816118399190612bc7565b506004820181600401908161184e9190612bc7565b50600582018160050190816118639190612bc7565b506006820160009054906101000a900460ff168160060160006101000a81548160ff0219169083151502179055506006820160019054906101000a900460ff168160060160016101000a81548160ff0219169083151502179055506006820160029054906101000a900463ffffffff168160060160026101000a81548163ffffffff021916908363ffffffff1602179055506006820160069054906101000a900460ff168160060160066101000a81548160ff021916908360ff1602179055505050916007019190600701906117dc565b5b50905061194291906119e2565b5090565b604051806040016040528060608152602001606081525090565b8280548282559060005260206000209060020281019282156119d15760005260206000209160020282015b828111156119d0578282600082018160000190816119a99190612bc7565b50600182018160010190816119be9190612bc7565b5050509160020191906002019061198b565b5b5090506119de9190611aac565b5090565b5b80821115611aa857600080820160006119fc9190611ae3565b600182016000611a0c9190611ae3565b600282016000611a1c9190611ae3565b600382016000611a2c9190611ae3565b600482016000611a3c9190611ae3565b600582016000611a4c9190611ae3565b6006820160006101000a81549060ff02191690556006820160016101000a81549060ff02191690556006820160026101000a81549063ffffffff02191690556006820160066101000a81549060ff0219169055506007016119e3565b5090565b5b80821115611adf5760008082016000611ac69190611ae3565b600182016000611ad69190611ae3565b50600201611aad565b5090565b508054611aef9061269f565b6000825580601f10611b015750611b20565b601f016020900490600052602060002090810190611b1f9190611b23565b5b50565b5b80821115611b3c576000816000905550600101611b24565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ba782611b5e565b810181811067ffffffffffffffff82111715611bc657611bc5611b6f565b5b80604052505050565b6000611bd9611b40565b9050611be58282611b9e565b919050565b600067ffffffffffffffff821115611c0557611c04611b6f565b5b611c0e82611b5e565b9050602081019050919050565b82818337600083830152505050565b6000611c3d611c3884611bea565b611bcf565b905082815260208101848484011115611c5957611c58611b59565b5b611c64848285611c1b565b509392505050565b600082601f830112611c8157611c80611b54565b5b8135611c91848260208601611c2a565b91505092915050565b60008115159050919050565b611caf81611c9a565b8114611cba57600080fd5b50565b600081359050611ccc81611ca6565b92915050565b600063ffffffff82169050919050565b611ceb81611cd2565b8114611cf657600080fd5b50565b600081359050611d0881611ce2565b92915050565b600060ff82169050919050565b611d2481611d0e565b8114611d2f57600080fd5b50565b600081359050611d4181611d1b565b92915050565b6000806000806000806000806000806101408b8d031215611d6b57611d6a611b4a565b5b60008b013567ffffffffffffffff811115611d8957611d88611b4f565b5b611d958d828e01611c6c565b9a505060208b013567ffffffffffffffff811115611db657611db5611b4f565b5b611dc28d828e01611c6c565b99505060408b013567ffffffffffffffff811115611de357611de2611b4f565b5b611def8d828e01611c6c565b98505060608b013567ffffffffffffffff811115611e1057611e0f611b4f565b5b611e1c8d828e01611c6c565b97505060808b013567ffffffffffffffff811115611e3d57611e3c611b4f565b5b611e498d828e01611c6c565b96505060a08b013567ffffffffffffffff811115611e6a57611e69611b4f565b5b611e768d828e01611c6c565b95505060c0611e878d828e01611cbd565b94505060e0611e988d828e01611cbd565b935050610100611eaa8d828e01611cf9565b925050610120611ebc8d828e01611d32565b9150509295989b9194979a5092959850565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f08578082015181840152602081019050611eed565b60008484015250505050565b6000611f1f82611ece565b611f298185611ed9565b9350611f39818560208601611eea565b611f4281611b5e565b840191505092915050565b611f5681611c9a565b82525050565b611f6581611cd2565b82525050565b611f7481611d0e565b82525050565b6000610140830160008301518482036000860152611f988282611f14565b91505060208301518482036020860152611fb28282611f14565b91505060408301518482036040860152611fcc8282611f14565b91505060608301518482036060860152611fe68282611f14565b915050608083015184820360808601526120008282611f14565b91505060a083015184820360a086015261201a8282611f14565b91505060c083015161202f60c0860182611f4d565b5060e083015161204260e0860182611f4d565b50610100830151612057610100860182611f5c565b5061012083015161206c610120860182611f6b565b508091505092915050565b600060208201905081810360008301526120918184611f7a565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006120c482612099565b9050919050565b6120d4816120b9565b81146120df57600080fd5b50565b6000813590506120f1816120cb565b92915050565b6000806000606084860312156121105761210f611b4a565b5b600061211e868287016120e2565b935050602084013567ffffffffffffffff81111561213f5761213e611b4f565b5b61214b86828701611c6c565b925050604084013567ffffffffffffffff81111561216c5761216b611b4f565b5b61217886828701611c6c565b9150509250925092565b61218b816120b9565b82525050565b600060408301600083015184820360008601526121ae8282611f14565b915050602083015184820360208601526121c88282611f14565b9150508091505092915050565b60006040820190506121ea6000830185612182565b81810360208301526121fc8184612191565b90509392505050565b6000806040838503121561221c5761221b611b4a565b5b600061222a858286016120e2565b925050602083013567ffffffffffffffff81111561224b5761224a611b4f565b5b61225785828601611c6c565b9150509250929050565b60006020828403121561227757612276611b4a565b5b600082013567ffffffffffffffff81111561229557612294611b4f565b5b6122a184828501611c6c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006101408301600083015184820360008601526122f48282611f14565b9150506020830151848203602086015261230e8282611f14565b915050604083015184820360408601526123288282611f14565b915050606083015184820360608601526123428282611f14565b9150506080830151848203608086015261235c8282611f14565b91505060a083015184820360a08601526123768282611f14565b91505060c083015161238b60c0860182611f4d565b5060e083015161239e60e0860182611f4d565b506101008301516123b3610100860182611f5c565b506101208301516123c8610120860182611f6b565b508091505092915050565b60006123df83836122d6565b905092915050565b6000602082019050919050565b60006123ff826122aa565b61240981856122b5565b93508360208202850161241b856122c6565b8060005b85811015612457578484038952815161243885826123d3565b9450612443836123e7565b925060208a0199505060018101905061241f565b50829750879550505050505092915050565b6000602082019050818103600083015261248381846123f4565b905092915050565b6000602082840312156124a1576124a0611b4a565b5b60006124af848285016120e2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060408301600083015184820360008601526125018282611f14565b9150506020830151848203602086015261251b8282611f14565b9150508091505092915050565b600061253483836124e4565b905092915050565b6000602082019050919050565b6000612554826124b8565b61255e81856124c3565b935083602082028501612570856124d4565b8060005b858110156125ac578484038952815161258d8582612528565b94506125988361253c565b925060208a01995050600181019050612574565b50829750879550505050505092915050565b60006040820190506125d36000830185612182565b81810360208301526125e58184612549565b90509392505050565b600081905092915050565b600061260482611ece565b61260e81856125ee565b935061261e818560208601611eea565b80840191505092915050565b600061263682846125f9565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806126b757607f821691505b6020821081036126ca576126c9612670565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546126fd8161269f565b61270781866126d0565b9450600182166000811461272257600181146127375761276a565b60ff198316865281151582028601935061276a565b612740856126db565b60005b8381101561276257815481890152600182019150602081019050612743565b838801955050505b50505092915050565b600061277f82846126f0565b915081905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026127ec7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826127af565b6127f686836127af565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061283d6128386128338461280e565b612818565b61280e565b9050919050565b6000819050919050565b61285783612822565b61286b61286382612844565b8484546127bc565b825550505050565b600090565b612880612873565b61288b81848461284e565b505050565b5b818110156128af576128a4600082612878565b600181019050612891565b5050565b601f8211156128f4576128c58161278a565b6128ce8461279f565b810160208510156128dd578190505b6128f16128e98561279f565b830182612890565b50505b505050565b600082821c905092915050565b6000612917600019846008026128f9565b1980831691505092915050565b60006129308383612906565b9150826002028217905092915050565b61294982611ece565b67ffffffffffffffff81111561296257612961611b6f565b5b61296c825461269f565b6129778282856128b3565b600060209050601f8311600181146129aa5760008415612998578287015190505b6129a28582612924565b865550612a0a565b601f1984166129b88661278a565b60005b828110156129e0578489015182556001820191506020850194506020810190506129bb565b868310156129fd57848901516129f9601f891682612906565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a4c8261280e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612a7e57612a7d612a12565b5b600182019050919050565b50565b6000612a996000836126d0565b9150612aa482612a89565b600082019050919050565b6000612aba82612a8c565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f205472616e73666572206c656167756550726963650000600082015250565b6000612b0b601e83612ac4565b9150612b1682612ad5565b602082019050919050565b60006020820190508181036000830152612b3a81612afe565b9050919050565b7f3b3b3b0000000000000000000000000000000000000000000000000000000000815250565b6000612b7382846125f9565b9150612b7e82612b41565b60038201915081905092915050565b6000612b9982856125f9565b9150612ba582846125f9565b91508190509392505050565b600081549050612bc08161269f565b9050919050565b818103612bd5575050612cad565b612bde82612bb1565b67ffffffffffffffff811115612bf757612bf6611b6f565b5b612c01825461269f565b612c0c8282856128b3565b6000601f831160018114612c3b5760008415612c29578287015490505b612c338582612924565b865550612ca6565b601f198416612c498761278a565b9650612c548661278a565b60005b82811015612c7c57848901548255600182019150600185019450602081019050612c57565b86831015612c995784890154612c95601f891682612906565b8355505b6001600288020188555050505b5050505050505b56fea26469706673582212203fbcb6756aa4a3d8e4c40116f606a8414d1441da4dda4910a5866b24d4ec9bb864736f6c63430008110033";

type LeagueX3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LeagueX3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LeagueX3__factory extends ContractFactory {
  constructor(...args: LeagueX3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LeagueX3> {
    return super.deploy(overrides || {}) as Promise<LeagueX3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LeagueX3 {
    return super.attach(address) as LeagueX3;
  }
  override connect(signer: Signer): LeagueX3__factory {
    return super.connect(signer) as LeagueX3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LeagueX3Interface {
    return new utils.Interface(_abi) as LeagueX3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LeagueX3 {
    return new Contract(address, _abi, signerOrProvider) as LeagueX3;
  }
}
