// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    constructor(uint256 _initialSupply, string _name, string _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, _initialSupply * 10 ** decimals());
    }
}
