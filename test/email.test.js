import { decode } from "../src/emailDecoder.js"
import assert from "node:assert"
import chalk from "chalk"

const testCases = [{
    'encoded': '06646e6772746f656e6f72373646616b676f6a2865696b', // this is the encoded version of expected email (by CF)
    'expected': 'bhatrichit10@gmail.com' // gng email me lmao
}]
for (let {encoded, expected} of testCases) {
    const decoded = decode(encoded)
    try {
        assert.strictEqual(decoded, expected)
        console.log(chalk.green(`Test passed for encoded: ${encoded}`))
        console.log(chalk.green(`Test passed for decoded: ${decoded}`))
    } catch (error) {
        console.error(chalk.red(`Test failed for encoded: ${encoded}`))
        console.error(chalk.red(`Expected: ${expected}, but got: ${decoded}`))
    }
}
