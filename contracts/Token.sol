// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 _initialSupply, string memory _name, string memory _symbol, address owner) ERC20(_name, _symbol) {
        _mint(owner, _initialSupply * 10 ** decimals());
    }
}
