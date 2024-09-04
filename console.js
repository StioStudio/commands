export function main({rl, line, commands}) {
    rl.write(line.substring(line.indexOf(" ") + 1, line.length))
    rl.write("\n")
}