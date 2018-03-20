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
        require(msg.value == 0.02)

        betters.push(msg.sender);
        betterInfo[msg.sender].amountsBet[teamIdx] = msg.value;
        totalAmountsBet[teamIdx] += msg.value;
    }

    function pickWinner() public {
        // Calculate totalAmountsBet
        // even spread transfer
        
        uint totalFull = totalAmountBet[0] + totalAmountBet[1];
        uint payout = totalFull / 
        
        for (uint i = 0; i < betters.length; i++) {
          uint betOnWinner = betterInfo[betters[i]].amountsBet[uint(winningTeam)];
          
        }
        
        betters[0].transfer(address(this).balance);
        betters = new address[](0);
    }
    
    function getBetters() public view returns (address[]) {
        return betters;
    }
}