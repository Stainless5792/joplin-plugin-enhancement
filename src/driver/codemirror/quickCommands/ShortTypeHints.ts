import { Hint } from "./quickCommands";

const ShortTypeHints: Hint[] = [
    {
        text: '- [ ] ',
        displayText: '/task',
        description: 'Checkbox',
        inline: true
    },
    {
        text: '``',
        displayText: '/inline',
        description: 'Inline Code',
        inline: true
    },
    {
        text: ':::note(note abstract info tip success question warning failure danger bug example quote)\n' +
            '\n' +
            ':::',
        displayText: '/note',
        description: 'Codeblock',
        inline: false
    },
    {
        text: '```\n' +
            '\n' +
            '```',
        displayText: '/code',
        description: 'Codeblock',
        inline: false
    }
]

export default ShortTypeHints;
