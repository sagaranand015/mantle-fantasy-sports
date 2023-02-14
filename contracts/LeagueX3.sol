// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LeagueX3 {
    struct leagueData {
        string ipfsLink;
        uint16 squadLimit;
    }

    struct userLeagueData {
        string leagueDataLink;
        string squads;
    }

    // this mapping is between the matchipfsLink obtained from datastore =>
    // to all the leagueData associated on keyed match
    mapping(string => leagueData[]) allLeagues;

    // this mapping is between the user address =>
    // leagueParticipation data including leagueIpfsLink and the createdSquadLink
    // PS: SquadLink can contain multiple squads for participating in the same league
    mapping(address => userLeagueData[]) userParticipation;

    function CreateUpdateLeague(
        string memory matchCid,
        string memory leagueIpfsLink,
        uint16 sLimit
    ) public returns (string memory, uint16) {
        leagueData[] storage addedLeagues = allLeagues[matchCid];
        for (uint256 i = 0; i < addedLeagues.length; i++) {
            if (
                keccak256(bytes(addedLeagues[i].ipfsLink)) ==
                keccak256(bytes(leagueIpfsLink))
            ) {
                addedLeagues[i].ipfsLink = leagueIpfsLink;
                addedLeagues[i].squadLimit = sLimit;
                return (leagueIpfsLink, sLimit);
            }
        }
        leagueData memory lData = leagueData(leagueIpfsLink, sLimit);
        addedLeagues.push(lData);
        allLeagues[matchCid] = addedLeagues;
        return (leagueIpfsLink, sLimit);
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
        string memory leagueLink,
        string memory squadLink
    ) public returns (address, userLeagueData memory) {
        userLeagueData[] storage userLeagues = userParticipation[user_addr];
        for (uint256 i = 0; i < userLeagues.length; i++) {
            // Case for when the user is participating in the league with a subsequent squad
            if (
                keccak256(bytes(userLeagues[i].leagueDataLink)) ==
                keccak256(bytes(leagueLink))
            ) {
                string memory userSquads = userLeagues[i].squads;
                string memory addedSep = string.concat(userSquads, ";;;");
                string memory newSquad = string.concat(addedSep, squadLink);
                userLeagues[i].squads = newSquad;
                return (user_addr, userLeagues[i]);
            }
        }
        // Case for when the user is participating in a new league with the first squad
        userLeagueData memory ul = userLeagueData(leagueLink, squadLink);
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
        string memory leagueLink
    ) public view returns (address u_addr, userLeagueData memory u_league) {
        userLeagueData[] storage userLeagues = userParticipation[user_addr];
        for (uint256 i = 0; i < userLeagues.length; i++) {
            if (
                keccak256(bytes(userLeagues[i].leagueDataLink)) ==
                keccak256(bytes(leagueLink))
            ) {
                return (user_addr, userLeagues[i]);
            }
        }
    }
}
