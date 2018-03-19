pragma solidity ^0.4.17;

contract Betting {
    address public manager;
    address[] public betters;
    uint8 public constant NUM_TEAMS = 2;
    string[NUM_TEAMS] public TEAM_NAMES = ['Team Liquid', 'LGD Gaming'];
    enum TeamType {teamLiquid, LGDGaming, None}
    TeamType public winningTeam = TeamType.None;

    struct Better {
        uint[NUM_TEAMS] amountsBet;
    }

    mapping(address => Better) betterInfo;
    uint[NUM_TEAMS] public totalAmountsBet;


    function Betting() public {
        manager = msg.sender;
    }

    function bet(uint teamIdx) public payable {
        //requires

        betters.push(msg.sender);
        betterInfo[msg.sender].amountsBet[teamIdx] += msg.value;
        totalAmountsBet[teamIdx] += msg.value;

    }

    function pickWinner() public {
        betters[0].transfer(address(this).balance);
        betters = new address[](0);

    }
}
