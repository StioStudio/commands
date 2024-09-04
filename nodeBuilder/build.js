import fs from "fs"

export function test({ args }) {
    console.log("\nYour test input: " + args.join(" "))
    if (args.length == 0) {
        console.log("(No arguments passed)")
    }
    console.log("")
}

export function init({ args }) {
    if (args.length == 0) {
        console.error("No arguments passed")
        return
    }
    fs.appendFileSync(args[0], "test")
}