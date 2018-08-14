import React from 'react';
import marked from 'marked';
import './stylesheets/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Fill the editor with some raw markdown
      rawInput: '# Marked in browser\n\nRendered by **marked**.\n\n1. Ordered list item\n\n\n* Unordered List item',
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
