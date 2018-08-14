import React from 'react';
import marked from 'marked';
import './stylesheets/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Fill the editor with some raw markdown
      rawInput: `
# Hello world!

## Here's a convenient markdown previewer!
### Use it to help format your repo's README
###### * Here are some examples of how format markdown

Inline code works by using a single \`backtick\`.

Multiline code works by using triple backticks:

\`\`\`
let x = 1;
let y = 2;

console.log("The values before swapping are:")
console.log(\`X: \${x}\`);
console.log(\`Y: \${y}\`);

[x, y] = [y, x];

console.log("The values after swapping are:")
console.log(\`X: \${x}\`);
console.log(\`Y: \${y}\`);
\`\`\`

Horizontal rules are made by using 3 asterisks, hyphens or underscores in a row

---

**Bold** text

*Italic* text

Maybe ***both***?

The quick brown fox jumps over the ~~lazy~~ dog. Waittttt a second....

[Donald Knuth's Famous Quote:](https://en.wikiquote.org/wiki/Donald_Knuth#Computer_Programming_as_an_Art_(1974))

> *Premature optimization is the root of all evil*

Need some tabular data? Markdown has your back:

Column 1  | Column 2  | Column 3
------------ | ------------- | -------------
Row 1 | Lorem ipsum dolor sit amet, | consectetur adipiscing elit
Row 2 | Lorem ipsum dolor sit amet, | consectetur adipiscing elit

- To do list
  - Monday
    1. Drink Coffee
    - ???
    - **Profit**


#### But for real... [Success boiled down in to 3 steps](https://www.forbes.com/sites/levelup/2017/01/04/3-keys-to-success-from-young-business-leaders/#6b2b500d7af4):
1. Put in the work
- Persist through low times
* Take pride in your work

![React Logo w/ Text](https://goo.gl/Umyytc)`,
      markdownOutput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.convertMarkdown = this.convertMarkdown.bind(this);
  }

  // https://stackoverflow.com/questions/34686523/using-marked-in-react
  convertMarkdown() {
    const markdown = marked(this.state.rawInput, {sanitize: true});
    return {__html: markdown};
  }

  handleChange(e) {
    this.setState({
      rawInput: e.target.value,
      markdownOutput: this.convertMarkdown()
    });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App__title'>Markdown Previewer</h1>
        <div className='App__io'>

          <div className='App__editor'>
            <h2 className='App__editor-title'>Editor</h2>
            <textarea id='input' onChange={this.handleChange} value={this.state.rawInput}></textarea>
          </div>

          <div className='App__previewer'>
            <h2 className='App__previewer-title'>Previewer</h2>
            <div id='output' dangerouslySetInnerHTML={this.convertMarkdown()}></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
