// identify variables and determine which will be prompts

let userName = "Kaylee"
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
userState = prompt ("Enter a state using a capitalized two letter abreviation:")
userTemp = prompt ("Enter the temperature as a number of degree farenheit:")


// this code determines the criteria that will "log" or display text for that criteria


switch (userState && userTemp) {
case `NE` && `<32` :
    console.log(`${userName} you should prepare and ${messages[0]}`)
      break 
case `NE` && `>32 && userTemp <50` :
    console.log(`${userName} you should prepare and ${messages[1]}`)
      break 
case `FL` && `>32 && userTemp <50` :
    console.log(`${userName} you should prepare and ${messages[2]}`)
      break 
case `FL` && `>50 && userTemp <70` :
    console.log(`${userName} you should prepare and ${messages[3]}`)
      break 
      }
      
    
      