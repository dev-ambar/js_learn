// for Loop -> if you know how many times to loop

//  for(let i = 1 ; i<=30 ; i++ )
// {
//     console.log('ambar'+ i);
// }

//  while loop --> if you  do not know  how many time to loop run  


   //   let ip = 1 ;

   //   let home = 10;

   //   while(ip!=home)
   //   {  
   //      ip = ip+1;
   //      console.log("step taken "+ip);
       
   //   }

   // do while   first you  want run  first action then after check condition
    
   //       let ip = 1 ;
   //       let home = 10;
   // do {

   //        ip = ip+1;
   //       console.log("step taken "+ip);

   // } while (ip <= home)


   // example of a game guess the number

         let number = 40;
         let guess = 0;
        
         do{
               guess = parseInt(prompt("guess the number"));
                if(guess == number)
                {
                   alert('Winner !!  '+'you have guess currect number');
                   break;
                }               
                if(guess == 0)
                {
                  alert('you have choose to quit');
                  break;
                }
         }while(guess != 40 )