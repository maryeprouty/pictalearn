/**
 * Handles requests for user info using user ~email~ from context
 */

export class UserManager {

    // Gets the user's full name from the server
    static getName(userEmail) {
        
        return fetch('http://localhost:4200/userManager.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({      
            //email: 'meprouty@bellsouth.net',  
            email: userEmail,   
          })
         
        }).then((response) => response.json())
              .then((responseJson) => { 
                // Return the name of the user
                console.log(responseJson);
                return responseJson.firstname + ' ' + responseJson.lastname;
              }).catch((error) => {
                console.error(error);
              });

    }

}