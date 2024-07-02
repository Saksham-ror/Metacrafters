// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0

pragma solidity ^0.8.17;

contract errHand{
    uint minPercent= 75;
    mapping(address => studentDetails) public student;
    struct studentDetails{
        uint percent;
        bool scholarship;
    }

    function registerStudent(uint _percent) public{
        require(_percent>=minPercent,"Student is not eligible for scholarship");
        student[msg.sender].percent= _percent;
        student[msg.sender].scholarship =true;
    }

    function isRegistered(address student) public view returns(bool){
        assert(student[student].scholarship!=false,"Student is not eligible");
        returns student[student].scholarship;
    }

    function transfer(address recipient, uint amount) public {
    revert(false);
    payable(recipient).transfer(amount);
  }
}
