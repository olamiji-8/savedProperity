import mastro from "../../../assets/dashboard_img/wallet/Icon/mastro.png";
import mastercard from "../../../assets/dashboard_img/wallet/Icon/mastercard.png";
import visa from "../../../assets/dashboard_img/wallet/Icon/visa.png";
import chip from "../../../assets/dashboard_img/wallet/Icon/chip.png";

const Cards = [
  {
    type: "MASTRO",
    logo: mastro,
    name: "John Doe",
    expiryDate: "03/23",
    number: "**** **** **** 3245",
    chip: chip,
    color: "",
  },
  {
    type: "VISA",
    logo: visa,
    name: "Vick Adams",
    expiryDate: "10/22",
    number: "**** **** **** 9834",
    chip: chip,
    color: "",
  },
  {
    type: "MasterCard",
    logo: mastercard,
    name: "Dominic Toretto",
    expiryDate: "03/23",
    number: "**** **** **** 2093",
    chip: chip,
    color: "",
  },
  // {
  //     type: "Verve",
  //     logo: mastercard,
  //     name:"Anonymous",
  //     expiryDate: "03/23",
  //     number: "**** **** **** 3245",
  //     chip: chip,
  //     color: "",
  // },
];

export default Cards;
