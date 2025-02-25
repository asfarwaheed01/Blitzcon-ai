import { Avatar } from "@/Interfaces/interfaces";

export const AVATARS: Avatar[] = [
  // {
  //   id: "Eric_public_pro2_20230608",
  //   name: "Edward in Blue Shirt",
  //   gender: "male",
  //   ethnicity: "Caucasian",
  //   age: "Old",
  // },
  // {
  //   id: "Tyler-incasualsuit-20220721",
  //   name: "Tyler in Casual Suit",
  //   gender: "male",
  //   ethnicity: "Caucasian",
  //   age: "Middle Age",
  // },
  // {
  //   id: "Anna_public_3_20240108",
  //   name: "Anna in Brown T-shirt",
  //   gender: "female",
  //   ethnicity: "Caucasian",
  //   age: "Young",
  // },
  // {
  //   id: "Susan_public_2_20240328",
  //   name: "Susan in Black Shirt",
  //   gender: "female",
  //   ethnicity: "Caucasian",
  //   age: "Young",
  // },
  {
    id: "josh_lite3_20230714",
    name: "Joshua Heygen CEO",
    gender: "non-binary",
    ethnicity: "Asian",
    age: "Young",
  },
  {
    id: "Wayne_20240711",
    name: "Wayne Bruce",
    gender: "male",
    ethnicity: "African American",
    age: "Old",
  },
  {
    id: "ef08039a41354ed5a20565db899373f3",
    name: "Sonia",
    gender: "female",
    ethnicity: "Hispanic",
    age: "Old",
  },
  {
    id: "336b72634e644335ad40bd56462fc780",
    name: "Lina",
    gender: "female",
    ethnicity: "African American",
    age: "Middle Age",
  },
  {
    id: "37f4d912aa564663a1cf8d63acd0e1ab",
    name: "Tina",
    gender: "female",
    ethnicity: "Hispanic",
    age: "Young",
  },
  {
    id: "cc2984a6003a4d5194eb58a4ad570337",
    name: "Lucas",
    gender: "male",
    ethnicity: "Caucasian",
    age: "Middle Age",
  },
  {
    id: "eb0a8cc8046f476da551a5559fbb5c82",
    name: "Raj",
    gender: "male",
    ethnicity: "Asian",
    age: "Middle Age",
  },
  {
    id: "fa7b34fe0b294f02b2fca6c1ed2c7158",
    name: "Mei Lin",
    gender: "female",
    ethnicity: "Asian",
    age: "Middle Age",
  },
  {
    id: "3c8a703d9d764938ae522b43401a59c2",
    name: "Kenji",
    gender: "non-binary",
    ethnicity: "Asian",
    age: "Middle Age",
  },
  {
    id: "73c84e2b886940099c5793b085150f2f",
    name: "Zara",
    gender: "female",
    ethnicity: "Asian",
    age: "Young",
  },
  {
    id: "c20f4bdddbe041ecba98d93444f8b29b",
    name: "Caroline",
    gender: "female",
    ethnicity: "Caucasian",
    age: "Middle Age",
  },
  {
    id: "43c34c4285cb4b6c81856713c70ba23b",
    name: "Khalid",
    gender: "male",
    ethnicity: "Hispanic",
    age: "Middle Age",
  },
  {
    id: "2c57ba04ef4d4a5ca30a953d0791e7e3",
    name: "Jack",
    gender: "male",
    ethnicity: "Caucasian",
    age: "Middle Age",
  },
];

export const BASE_URL = "https://blitzconai.com/api";

export const getAccessToken = () => {
  return localStorage.getItem("token");
};
