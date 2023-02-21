// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract LeagueRewards is ERC721URIStorage {
    uint256 serviceId = 1;
    address orgOwner;

    struct LeagueRewardData {
        uint256 tokenId;
        string ipfsHash;
        string image;
        address owner;
        uint256 createdAt; // timestamp
        string leagueName; // leagueName
        string matchName; // matchName
        string title; // winner/runnersup and so on
    }

    LeagueRewardData[] allRewards;
    mapping(address => LeagueRewardData[]) userLeagueRewards;

    constructor(address _orgOwner) ERC721("LeagueRewardNFT", "LRNFT") {
        orgOwner = _orgOwner;
    }

    function CreateNft(
        string memory leagueName,
        string memory matchName,
        string memory title,
        string memory ipfsHash,
        string memory image,
        address ownerAddress
    ) public {
        if (ownerAddress == address(0)) {
            ownerAddress = msg.sender;
        }

        uint256 sid = allRewards.length;
        LeagueRewardData memory nextReward = LeagueRewardData(
            sid,
            ipfsHash,
            image,
            ownerAddress,
            block.timestamp,
            leagueName,
            matchName,
            title
        );

        // _transfer(msg.sender, _gymStore, tokenId);
        allRewards.push(nextReward);
        LeagueRewardData[] storage userRewards = userLeagueRewards[
            ownerAddress
        ];
        userRewards.push(nextReward);
        userLeagueRewards[ownerAddress] = userRewards;
        _mint(msg.sender, serviceId);
        _setTokenURI(serviceId, ipfsHash);
        serviceId++;
    }

    function GetUserRewards(address user_address)
        public
        view
        returns (LeagueRewardData[] memory)
    {
        return (userLeagueRewards[user_address]);
    }
}
