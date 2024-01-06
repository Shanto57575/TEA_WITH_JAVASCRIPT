// switch (key) {
//     case value:

//         break;
//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}

switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "mar":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}