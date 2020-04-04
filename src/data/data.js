import marked from 'marked';

function genData(md, tags = [], alt = []) {
    let resp = {};
    marked.setOptions({
        renderer: new marked.Renderer(),
        breaks: true, 
        gfm: true, 
        headerIds: false
    })

    resp = {
        'md': md,
        'output': marked(md),
        'alternate': [...alt],
        'tags': [...tags]
    }

    return resp;
}

let data = [
    genData('# Heading 1', ['heading', 'h1'], ['Heading 1\n===']),
    genData('## Heading 2', ['heading', 'h2'], ['Heading 2\n---']),
    genData('### Heading 3', ['heading', 'h3']),
    genData('#### Heading 4', ['heading', 'h4']),
    genData('##### Heading 5', ['heading', 'h5']),
    genData('###### Heading 6', ['heading', 'h6']),
    genData('This is a paragraph of text.\n\nThis is another longer paragraph of text that shows how awesome Markdown is.', ['text', 'paragraph']),
    genData('This is a paragraph of text.\nThis line is part of the same paragraph.', ['text', 'paragraph']),
    genData('Text in *italics*', ['text', 'italics', 'style', 'decoraction', 'emphasis'], ['Text in _italics_']),
    genData('Make text **bold**', ['text', 'strong', 'bold', 'style', 'decoraction', 'emphasis'], ['Make text __bold__']),
    genData('Text that is ***bold and italicized***', ['text', 'strong', 'bold', 'italics', 'style', 'decoraction', 'emphasis'], ['___bold and italics___', '**_bold and italics_**', '__*bold and italics*__']),
    genData('~~strikethrough~~', ['text', 'strike', 'strikethrough', 'style', 'decoraction', 'emphasis']),
    genData('1. Item one\n2. Item two\n3. Item three', ['list', 'ordered', 'numbered']),
    genData('1. Item one\n2. Item two\n 1. Indented item\n3. Item three', ['list', 'ordered', 'numbered', 'indent']),
    genData('1. Item one\n\n   With a nicely aligned paragraph below. The empty line above is ***required***.', ['list', 'style', 'alignment']),
    genData('* Bullet\n* Lists\n* Are easy', ['list', 'unordered', 'bullet'], ['- Bullet\n- Lists\n- Are easy', '+ Bullet\n+ Lists\n+ Are easy']),
    genData('1. List styles\n  - Can be combined', ['list', 'combine', 'bullet', 'ordered', 'unordered', 'numbered', 'indent']),
    genData('1. Code blocks in lists\n        <p>Needs</p>\n        <span>8 spaces</span>\n        <p>At the start of the lines</p>\n2. Item two', ['list']),
    genData('[Link text](https://fershad.com)', ['link', 'hyperlink']),
    genData('[Link text with title](https://fershad.com "My website")', ['link', 'hyperlink']),
    genData('https://fershad.com', ['link', 'hyperlink'], ['<https://fershad.com>']),
    genData('This [link] is self-referencing.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [descriptive link][link] is shows different text to the reference.\n\n[link]: https://www.fershad.com', ['link', 'reference']),
    genData('This [numbered reference][1] is an easy way to repeatly [reference the same link][1].\n\n[1]: https://www.fershad.com', ['link', 'reference']),
    genData('Show `code snippets` with back-ticks', ['code', 'inline']),
    genData('    <div>\n      <p>Start each line of a code block with at least 4 spaces</p>\n    </div>', ['code', 'block'], ['```Three back-ticks\ngives a code block```', '```javascript\nvar j = "Add a language to facilitate highlighting.";\nconsole.log(j);\n```']),
    genData('> You can create blockquotes like this.', ['text', 'quotes', 'blockquote']),
    genData('> Multi-line\n>\n> Blockquotes are also easy.', ['text', 'quotes', 'blockquote']),
    genData('> Nested blockquotes\n>> Can be made like this.', ['text', 'quotes', 'blockquote']),
    genData('> Include other elements in a blockquote\n> 1. Just\n> 2. Like\n>\n>This.', ['text', 'quotes', 'blockquote']),
    genData('Table | Heading | Row\n--- | --- | ---\n This is how | you can make | a table\nAll | text is | left-aligned', ['table']),
    genData('Table | Heading | Row\n--- | --- | :---:\n Use two colons | to center | text', ['table']),
    genData('Table | Heading | Row\n--- | ---: | ---\n Right align | text | one colon', ['table']),
    genData('![alt text](/images/fershad.png "Inline image with alt text")', ['image', 'inline']),
    genData('![alt text][my-logo]\n\nHere\'s a reference image.\n\n[my-logo]: /images/fershad.png "Reference image with alt text"', ['image', 'reference']),
    genData('---', ['underline', 'style', 'divider'], ['***', '___']),
]

const _data = data;
export { _data as data };

