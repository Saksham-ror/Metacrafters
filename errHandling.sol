// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0

pragma solidity ^0.8.17;

contract errHand{
    uint minPercent= 75;
    mapping(address => studentDetails) public studentMap;
    struct studentDetails{
        uint percent;
        bool scholarship;
    }

    function registerStudent(uint _percent) public{
        require(_percent>=minPercent,"Student is not eligible for scholarship");
        studentMap[msg.sender].percent= _percent;
        studentMap[msg.sender].scholarship =true;
    }

    function isRegistered(address student) public view returns(bool){
        assert(studentMap[student].scholarship!=false);
        return studentMap[student].scholarship;
    }

    function transfer(address recipient, uint amount) public {
    revert();
    payable(recipient).transfer(amount);
  }
}
