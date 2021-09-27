
import amex from "../images/amex.png";
import diners from "../images/diners.png";
import discover from "../images/discover.png";
import visa from "../images/visa.png";
import masterCard from "../images/masterCard.png";
import jcb from "../images/jcb.png";


export const OTHERCARDS = [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  export const AMERICANEXPRESS = [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
  export const EXPIRYDATE = [/[0-9]/, /\d/, "/", /\d/, /\d/];
  export const CVC = [/[0-9]/, /\d/, /\d/, /\d/];
  
  export const cardIcons = {
    amex,
    diners,
    discover,
    visa,
    masterCard,
    jcb
  };
  
  export const CARDARR = [
    "VISA",
    "MASTERCARD",
    "AMERICAN_EXPRESS",
    "DISCOVER",
    "DINERS_CLUB",
    "JCB"
  ];