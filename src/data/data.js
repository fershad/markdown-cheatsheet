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
    genData('---', ['underline', 'style', 'divider']),
    genData('*italics*\nor\n_italics_', ['italics', 'style', 'decoraction', 'emphasis']),
    genData('**strong**\nor\n__strong__', ['strong', 'bold', 'style', 'decoraction', 'emphasis']),
    genData('**_strong and italics_**\nor\n__*strong and italics*__', ['strong', 'bold', 'italics', 'style', 'decoraction', 'emphasis']),
    genData('~~strikethrough~~', ['strike', 'strikethrough', 'style', 'decoraction', 'emphasis']),
    genData('1. Item one \n2. Item two', ['list', 'ordered', 'numbered']),
    genData('1. Item one \n2. Item two\n 1. Indented item', ['list', 'ordered', 'numbered', 'indent']),
    genData('1. Item one\n\n   With a nicely aligned paragraph below. The empty line above is **_required_**.', ['list', 'style', 'alignment']),
    genData('* Bullet\n- Lists\n+ Are easy', ['list', 'unordered', 'bullet']),
    genData('1. You can even\n   - Combine list styles')
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

