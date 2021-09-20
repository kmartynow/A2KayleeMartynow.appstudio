// identify variables like name, state, temperature, as well as prompts

let userName = "Kaylee"
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
userState = prompt ("Enter a state using a capitalized two letter abreviation:")
userTemp = prompt ("Enter the temperature as a number of degree farenheit:")

// this code determines the criteria that will "log" or display text for that criteria

if (userState = "NE", userTemp < 32 ) {
  console.log(`${userName} since you are in ${userState} and it is ${userTemp} degrees, you should prepare and ${messages[0]}`)
} else if (userState = "NE", userTemp > 32 && userTemp <50) {
    console.log(`${userName} since you are in ${userState} and it is ${userTemp} degrees, you should prepare and ${messages[1]}`)
} else if (userState = "FL", userTemp > 32 && userTemp <50) {
    console.log(`${userName} since you are in ${userState} and it is ${userTemp} degrees, you should prepare and ${messages[2]}`)
} else (userState = "FL" , userTemp > 50 && userTemp <70) 
    console.log(`${userName} since you are in ${userState} and it is ${userTemp} degrees, you should prepare and ${messages[3]}`)

