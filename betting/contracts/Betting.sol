pragma solidity ^0.4.17;
contract Betting {

    uint8 public constant NUM_TEAMS = 2;
    string[NUM_TEAMS] public TEAM_NAMES = ['Team Liquid', 'LGD Gaming'];

    enum TeamType {teamLiquid, LGDGaming, None}
    address public manager;
    address[] public betters;
    TeamType public winningTeam = TeamType.None;
    uint[NUM_TEAMS] public totalAmountsBet;

    struct Better {
        uint[NUM_TEAMS] amountsBet;
    }

    mapping(address => Better) betterInfo;


    function Betting() public {
        manager = msg.sender;
    }

    function enter(uint8 teamIdx) public payable {
        betters.push(msg.sender);
        betterInfo[msg.sender].amountsBet[teamIdx] = msg.value;
        totalAmountsBet[teamIdx] += msg.value;
    }

    function pickWinner(uint8 teamIdx) public {
        // Calculate totalAmountsBet
        // even spread transfer
        uint losingChunk = address(this).balance - totalAmountsBet[teamIdx];


        for (uint i = 0; i < betters.length; i++) {
          uint betOnWinner = betterInfo[betters[i]].amountsBet[teamIdx];
          uint payout = betOnWinner + ((betOnWinner * losingChunk)/totalAmountsBet[teamIdx]);
          betters[i].transfer(payout);

        }
         betters = new address[](0);
    }

    function getBetters() public view returns (address[]) {
        return betters;
    }
}
