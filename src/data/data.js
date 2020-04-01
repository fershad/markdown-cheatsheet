import marked from 'marked';

let data = [
    {
        'md': '<code># Heading 1</code>',
        'output': marked('# Heading 1'),
        'tags': ['heading', 'h1']
    },
    {
        'md': '<code>## Heading 2</code>',
        'output': marked('## Heading 2'),
        'tags': ['heading', 'h2']
    },
    {
        'md': '<code>### Heading 3</code>',
        'output': marked('### Heading 3'),
        'tags': ['heading', 'h3']
    },
    {
        'md': '<code>#### Heading 4</code>',
        'output': marked('#### Heading 4'),
        'tags': ['heading', 'h4']
    },
    {
        'md': '<code>##### Heading 5</code>',
        'output': marked('##### Heading 5'),
        'tags': ['heading', 'h5']
    },
    {
        'md': '<code>###### Heading 6</code>',
        'output': marked('###### Heading 6'),
        'tags': ['heading', 'h6']
    },
];

const _data = data;
export { _data as data };

