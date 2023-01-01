import {useState} from 'react';
import {marked} from 'marked';
import './App.css';

function App() {
const [text, setText] = useState(`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://assets.stickpng.com/images/62de8ebaff3c6e4b8b5de89e.png)
`)

marked.setOptions({
  breaks: true
})

  return (
    <div className="App">
    <div id="header"><img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg" width="22" />Editor</div>
    <textarea id="editor" rows="15" cols="80"
    onChange={(event) => {setText(event.target.value)}} 
    value={text}/>
    <div className="preview-header"><img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg" width="22" />Previewer</div>
    <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text)}}></div>
    </div>
  );
}

export default App;
