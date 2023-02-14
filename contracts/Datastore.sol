// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Datastore {
    struct playersData {
        string ipfsLink;
        bool valid;
    }

    struct matches {
        string ipfsLink;
        bool valid;
    }

    mapping(string => playersData) teamPlayersMapping;
    mapping(string => matches) matchesMapping;

    function CreateUpdateMatches(
        string memory date,
        string memory matchesIpfsUrl
    ) public returns (string memory, bool) {
        matches memory m = matches(matchesIpfsUrl, true);
        matchesMapping[date] = m;
        return (matchesIpfsUrl, true);
    }

    function GetMatches(string memory date)
        public
        view
        returns (string memory, bool)
    {
        require(
            matchesMapping[date].valid,
            "No Matches exist for this date yet!"
        );
        return (matchesMapping[date].ipfsLink, matchesMapping[date].valid);
    }

    function CreateUpdateTeam(string memory team, string memory playersIpfsUrl)
        public
        returns (string memory, bool)
    {
        playersData memory player = playersData(playersIpfsUrl, true);
        teamPlayersMapping[team] = player;
        return (playersIpfsUrl, true);
    }

    function GetTeamPlayers(string memory team)
        public
        view
        returns (string memory, bool)
    {
        require(
            teamPlayersMapping[team].valid,
            "Team does not exist within the contract yet!"
        );
        return (
            teamPlayersMapping[team].ipfsLink,
            teamPlayersMapping[team].valid
        );
    }
}
