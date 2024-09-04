import readline from 'readline';
import fs from 'fs';

const commands = JSON.parse(String(fs.readFileSync("command.json")))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function runTime() {
    const line = await new Promise((resolve, reject) => {
        rl.question(`> `, line => {
            resolve(line);
        })
    })

    if (line == "close") return false

    const args = line.split(" ")
    
    var i = 0
    var commands = JSON.parse(String(fs.readFileSync("command.json")))
    var fullPath = ""
    while (true) {
        const moduleObj = commands[args[i]]
        if (!moduleObj) {
            rl.write("Command not found\n")
            return true
        }
        fullPath += moduleObj.path
        
        if (moduleObj.function) {
            const module = await import(fullPath)
            await module[moduleObj.function]({ rl, line, commands, args })
            
            return true
        }
        else {
            commands = JSON.parse(String(fs.readFileSync(`${fullPath}/command.json`)))
            // console.error("Development Error: Function not found. Dynamic import not supported yet.")
            // const commandsJson = JSON.parse(String(fs.readFileSync(`${moduleObj.path}`)))
        }
        i++
    }
}

async function main() {
    while (await runTime()) {}
    rl.close()
}

main()
