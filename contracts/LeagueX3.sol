// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LeagueX3 {
    struct leagueData {
        string name;
        string img;
        string metadata;
        string matchName;
        string teamA;
        string teamB;
        bool isRunning;
        bool isFinished;
        uint32 leaguePrice;
        uint8 squadLimit;
    }

    struct userLeagueData {
        string leagueName;
        string squads;
    }

    // this mapping is between the matchipfsLink obtained from datastore =>
    // to all the leagueData associated on keyed match
    mapping(string => leagueData[]) allLeagues;

    // this mapping is between the user address =>
    // leagueParticipation data including leagueIpfsLink and the createdSquadLink
    // PS: SquadLink can contain multiple squads for participating in the same league
    mapping(address => userLeagueData[]) userParticipation;

    address eAddr = 0xDeC6Df558e198A7745AcBe881f61B3506D59CFC4;
    address payable escrowAddr = payable(eAddr);

    function CreateUpdateLeague(
        string memory matchName,
        string memory name,
        string memory img,
        string memory metadata,
        string memory teamA,
        string memory teamB,
        bool isRunning,
        bool isFinished,
        uint32 leaguePrice,
        uint8 squadLimit
    ) public returns (leagueData memory) {
        leagueData[] storage addedLeagues = allLeagues[matchName];
        for (uint256 i = 0; i < addedLeagues.length; i++) {
            if (
                keccak256(bytes(addedLeagues[i].name)) == keccak256(bytes(name))
            ) {
                addedLeagues[i].name = name;
                addedLeagues[i].img = img;
                addedLeagues[i].metadata = metadata;
                addedLeagues[i].matchName = matchName;
                addedLeagues[i].teamA = teamA;
                addedLeagues[i].teamB = teamB;
                addedLeagues[i].isRunning = isRunning;
                addedLeagues[i].isFinished = isFinished;
                addedLeagues[i].leaguePrice = leaguePrice;
                addedLeagues[i].squadLimit = squadLimit;
                return (addedLeagues[i]);
            }
        }
        leagueData memory lData = leagueData(
            name,
            img,
            metadata,
            matchName,
            teamA,
            teamB,
            isRunning,
            isFinished,
            leaguePrice,
            squadLimit
        );
        addedLeagues.push(lData);
        allLeagues[matchName] = addedLeagues;
        return (lData);
    }

    function GetLeagues(string memory matchCid)
        public
        view
        returns (leagueData[] memory)
    {
        return (allLeagues[matchCid]);
    }

    function user_participate(
        address user_addr,
        string memory leagueName,
        string memory squadLink
    ) public payable returns (address, userLeagueData memory) {
        (bool sent, bytes memory data) = escrowAddr.call{value: msg.value}("");
        require(sent, "Failed to Transfer leaguePrice");
        userLeagueData[] storage userLeagues = userParticipation[user_addr];
        for (uint256 i = 0; i < userLeagues.length; i++) {
            // Case for when the user is participating in the league with a subsequent squad
            if (
                keccak256(bytes(userLeagues[i].leagueName)) ==
                keccak256(bytes(leagueName))
            ) {
                string memory userSquads = userLeagues[i].squads;
                string memory addedSep = string.concat(userSquads, ";;;");
                string memory newSquad = string.concat(addedSep, squadLink);
                userLeagues[i].squads = newSquad;
                return (user_addr, userLeagues[i]);
            }
        }
        // Case for when the user is participating in a new league with the first squad
        userLeagueData memory ul = userLeagueData(leagueName, squadLink);
        userLeagues.push(ul);
        userParticipation[user_addr] = userLeagues;
        return (user_addr, ul);
    }

    function get_all_user_participation(address user_addr)
        public
        view
        returns (address, userLeagueData[] memory)
    {
        return (user_addr, userParticipation[user_addr]);
    }

    function get_user_league_participation(
        address user_addr,
        string memory leagueName
    ) public view returns (address u_addr, userLeagueData memory u_league) {
        userLeagueData[] storage userLeagues = userParticipation[user_addr];
        for (uint256 i = 0; i < userLeagues.length; i++) {
            if (
                keccak256(bytes(userLeagues[i].leagueName)) ==
                keccak256(bytes(leagueName))
            ) {
                return (user_addr, userLeagues[i]);
            }
        }
    }
}
