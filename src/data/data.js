import marked from 'marked';

function genData(md, tags = [], alt = []) {
    let resp = {};

    resp = {
        'md': md,
        'output': marked(md),
        'alternate': [...alt],
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
    genData('---', ['underline', 'style', 'divider'], ['***', '___']),
    genData('*italics*', ['text', 'italics', 'style', 'decoraction', 'emphasis'], ['_italics_']),
    genData('**strong**', ['text', 'strong', 'bold', 'style', 'decoraction', 'emphasis'], ['__strong__']),
    genData('**_strong and italics_**', ['text', 'strong', 'bold', 'italics', 'style', 'decoraction', 'emphasis'], ['__*strong and italics*__']),
    genData('~~strikethrough~~', ['text', 'strike', 'strikethrough', 'style', 'decoraction', 'emphasis']),
    genData('1. Item one \n2. Item two', ['list', 'ordered', 'numbered']),
    genData('1. Item one \n2. Item two\n 1. Indented item', ['list', 'ordered', 'numbered', 'indent']),
    genData('1. Item one\n\n   With a nicely aligned paragraph below. The empty line above is **_required_**.', ['list', 'style', 'alignment']),
    genData('* Bullet\n* Lists\n* Are easy', ['list', 'unordered', 'bullet'], ['- Bullet\n- Lists\n- Are easy', '+ Bullet\n+ Lists\n+ Are easy']),
    genData('1. List styles\n   - Can be combined', ['list', 'combine', 'bullet', 'ordered', 'unordered', 'numbered', 'indent']),
    genData('[Link text](https://fershad.com)', ['link', 'hyperlink']),
    genData('[Link text with title](https://fershad.com "My website")', ['link', 'hyperlink']),
    genData('https://fershad.com', ['link', 'hyperlink'], ['<https://fershad.com>']),
    genData('This [link] is self-referencing.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [descriptive link][link] is shows different text to the reference.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [numbered reference][1] is an easy way to repeatly [reference the same link][1].\n\n[1]: https://www.fershad.com', ['link', 'reference']),
    genData('`Back-ticks`', ['code', 'inline']),
    genData('```Three back-ticks\ngives a code block```', ['code', 'block'], ['```javascript\nvar j = "Add a language name to facilitate highlighting.";\console.log(j);\n```']),
    genData('> You can create blockquotes like this.', ['text', 'quotes', 'blockquote']),
    genData('Table | Heading | Row\n--- | --- | ---\n This is how | you can make | a table\nAll | text is | left-aligned', ['table']),
    genData('Table | Heading | Row\n--- | --- | :---:\n Use two colons | to center | text', ['table']),
    genData('Table | Heading | Row\n--- | ---: | ---\n Right align | text | one colon', ['table']),
    genData('![alt text](/images/fershad.png "Inline image with alt text")', ['image', 'inline']),
    genData('![alt text][my-logo]\n\nHere\'s a reference image.\n\n[my-logo]: /images/fershad.png "Reference image with alt text"', ['image', 'reference']),
]

const _data = data;
export { _data as data };

