// function getPropertiesFromCommandJSON(commandsJson) {
//     return Object.keys(commandsJson)
// }
export function please({rl, line, commands}) {
    console.log("Welcome to help!")
    console.log("Help commands:\nhelp", Object.keys(commands).join("\nhelp"))
}
