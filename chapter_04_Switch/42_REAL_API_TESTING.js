let responseCode = 400;

switch(responseCode){

    case 200:
        console.log("200 Ok");
        break;

     case 404 :
        console.log("404 not Found!");
        break;
      case 500:
        console.log("500 Internal Server Error");
        break;

        default:
        console.log("Not status code match");


}