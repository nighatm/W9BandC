
var userAge = [10,18,13,19];
var subscribed= [false,false,true,true];
var counter=0;
while( counter < userAge.length)
{

//CHANGE VALUES OF userAge VARIABLE TO 18, ANY NUMBER <18, OR ANY NUMBER > 18 TO SEE THE RESULTS IN CONSOLE 

if((userAge[counter] <18) && (subscribed[counter] != true) ){
        console.log ("user under 18 and not subscribed");
    }  
   else if((userAge[counter] >=18) && (subscribed[counter] != true)){
    console.log ("user is 18 or above and  not subscribed");
   } 
   else if (userAge[counter]<18 && (subscribed[counter] == true)){
    console.log ("user is under 18 and subscribed");

   }
   else if ((userAge[counter]>=18) && (subscribed[counter] == true)) {
    console.log ("user is 18 or above and subscribed");
   } 
    else
    {
        console.log("you are in an Error Mode! ");
    }

    counter++;
}