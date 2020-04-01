import marked from 'marked';

function genData(md, tags = []) {
    let resp = {};

    resp = {
        'md': md,
        'output': marked(md),
        'tags': [...tags]
    }

    return resp;
}

let data = [
    genData('# Heading 1', ['heading', 'h1']),
    genData('## Heading 2', ['heading', 'h2']),
    genData('### Heading 3', ['heading', 'h3']),
    genData('#### Heading 4', ['heading', 'h4']),
    genData('##### Heading 5', ['heading', 'h5']),
    genData('###### Heading 6', ['heading', 'h6']),
    genData('---\n\n***\n\n___', ['underline', 'style', 'divider']),
    genData('*italics*\nor\n_italics_', ['text', 'italics', 'style', 'decoraction', 'emphasis']),
    genData('**strong**\nor\n__strong__', ['text', 'strong', 'bold', 'style', 'decoraction', 'emphasis']),
    genData('**_strong and italics_**\nor\n__*strong and italics*__', ['text', 'strong', 'bold', 'italics', 'style', 'decoraction', 'emphasis']),
    genData('~~strikethrough~~', ['text', 'strike', 'strikethrough', 'style', 'decoraction', 'emphasis']),
    genData('1. Item one \n2. Item two', ['list', 'ordered', 'numbered']),
    genData('1. Item one \n2. Item two\n 1. Indented item', ['list', 'ordered', 'numbered', 'indent']),
    genData('1. Item one\n\n   With a nicely aligned paragraph below. The empty line above is **_required_**.', ['list', 'style', 'alignment']),
    genData('* Bullet\n- Lists\n+ Are easy', ['list', 'unordered', 'bullet']),
    genData('1. You can even\n   - Combine list styles', ['list', 'combine', 'bullet', 'ordered', 'unordered', 'numbered', 'indent']),
    genData('[Link text](https://fershad.com)', ['link', 'hyperlink']),
    genData('[Link text with title](https://fershad.com "My website")', ['link', 'hyperlink']),
    genData('https://fershad.com', ['link', 'hyperlink']),
    genData('<https://fershad.com>', ['link', 'hyperlink']),
    genData('This [link] is self-referencing.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [descriptive link][link] is shows different text to the reference.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [numbered reference][1] is an easy way to repeatly [reference the same link][1].\n\n[1]: https://www.fershad.com', ['link', 'reference']),
    genData('`Back-ticks`', ['code', 'inline']),
    genData('```Three back-ticks\ngives a code block```', ['code', 'block']),
    genData('```javascript\nvar j = "Add a language name to facilitate highlighting.";\console.log(j);\n```', ['code', 'block', 'style']),
    genData('> You can create blockquotes like this.', ['text', 'quotes', 'blockquote']),
    genData('Table | Heading | Row\n--- | --- | ---\n This is how | you can make | a table\nAll | text is | left-aligned', ['table']),
    genData('Table | Heading | Row\n--- | --- | :---:\n Use two colons | to center | text', ['table']),
    genData('Table | Heading | Row\n--- | ---: | ---\n Right align | text | one colon', ['table']),
    genData('![alt text](/images/fershad.png "Inline image with alt text")', ['image', 'inline']),
    genData('![alt text][my-logo]\n\nHere\'s a reference image.\n\n[my-logo]: /images/fershad.png "Reference image with alt text"', ['image', 'reference']),
]

// let data = [
//     {
//         'md': '<code># Heading 1</code>',
//         'output': marked('# Heading 1'),
//         'tags': ['heading', 'h1']
//     },
//     {
//         'md': '<code>## Heading 2</code>',
//         'output': marked('## Heading 2'),
//         'tags': ['heading', 'h2']
//     },
//     {
//         'md': '<code>### Heading 3</code>',
//         'output': marked('### Heading 3'),
//         'tags': ['heading', 'h3']
//     },
//     {
//         'md': '<code>#### Heading 4</code>',
//         'output': marked('#### Heading 4'),
//         'tags': ['heading', 'h4']
//     },
//     {
//         'md': '<code>##### Heading 5</code>',
//         'output': marked('##### Heading 5'),
//         'tags': ['heading', 'h5']
//     },
//     {
//         'md': '<code>###### Heading 6</code>',
//         'output': marked('###### Heading 6'),
//         'tags': ['heading', 'h6']
//     },
//     {
//         'md': '',
//         'output': marked('');
        
//     }
// ];

const _data = data;
export { _data as data };

