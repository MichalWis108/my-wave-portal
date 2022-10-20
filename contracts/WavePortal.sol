/// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint256) public waveCount;


    constructor() {
        console.log("I eat ass");
    }

    function wave() public {
        if(waveCount[msg.sender]==0){
        console.log("%s this is your first wave!", msg.sender);
        } else{
            console.log("%s has waved!", msg.sender);
        }
        totalWaves++;
        waveCount[msg.sender]++;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function myTotalWaves() external view returns (uint256) {
        uint256 result = waveCount[msg.sender];
        console.log("Total waves by %s: %d", msg.sender, result);
        return result;
    }

}