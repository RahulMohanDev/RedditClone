import React from "react";

const useUser = () => {

  let userObj = {
    gender: "male",
    name: { title: "Mr", first: "John", last: "Smith" },
    email: "johnsmith76@gmail.com",
    login: {
      uuid: "a3adb7d8-6a19-4a91-ba53-29f61c324422",
      username: "john_s226"
    },
    dob: { date: "1976-11-06T01:30:27.635Z", age: 45 },
    lastlogin: "2022-02-27T15:34:44.583Z",
    phone: "(171)-122-1163",
    cell: "(872)-104-4783",
    picture: {
      large: "https://randomuser.me/api/portraits/men/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg"
    }
  };

  return userObj;
};


export default useUser;
