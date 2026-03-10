import chalk from 'chalk'
function formatBold($) {
$('strong, b').each((i, el) => {
const text = $(el).text()
$(el).replaceWith(chalk.bold(text))
})
}
function formatItalic($) {
$('em, i').each((i, el) => {
const text = $(el).text()
$(el).replaceWith(chalk.italic(text))
})
}
function formatUnderline($) {
$('u').each((i, el) => {
const text = $(el).text()
$(el).replaceWith(chalk.underline(text))
})
}
function formatLinks($) {
$('a').each((i, el) => {
const text = $(el).text()
$(el).replaceWith(chalk.blue.underline(text))
})
}

export function format($) {
formatBold($)
formatItalic($)
formatUnderline($)
formatLinks($)
}