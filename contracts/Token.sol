// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 _initialSupply, string memory _name, string memory _symbol, address _owner) ERC20(_name, _symbol) {
        _mint(_owner, _initialSupply * 10 ** decimals());
    }

    function swap() public payable {
        require(msg.value > 0, "Must swap greater than 0 value");
        _mint(msg.sender, msg.value);
    }

}
