import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './App.css';
import scum from './assets/Scum.jpg';
import wrath from './assets/Wrath.jpg';
import eight from './assets/Eight.jpg';
import ProjectList from './components/ProjectList';
import ProjectCategory from './components/ProjectCategory';

class Collection extends React.Component {

  constructor(props) {
      super(props);

      this._handleClick = this._handleClick.bind(this)
      this.categoryNode = this.categoryNode.bind(this)
      this._focusOff = this._focusOff.bind(this)

      this.state = {
        open: false,
        activeIndex: null,
        categories: []
      }
  }
  componentDidMount() {
    // this._getCategories(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
      categories: [{"thumbnail": scum,"taxonomy":"category","count":6,"name":"The Scum","slug":"commodo","id":"586537da62981d5fb8c21617"},{"thumbnail":wrath,"taxonomy":"category","count":8,"name":"Wrath","slug":"laborum","id":"586537da60c040bc1e3060a1"},{"thumbnail":eight,"taxonomy":"category","count":3,"name":"The Eight","slug":"commodo","id":"586537daffc67c66ec4dc356"}]
    })
  }
  _handleClick(i){
    this.setState({
      activeIndex: i,
      open: true
    })
  }
  _focusOff(e){
    e.preventDefault()
    if (e.target.className !== 'category--image') {
      this.setState({
        activeIndex: null,
        open: false
      })
    }
  }
  categoryNode(cat, i){
      let isLast = ( i === this.state.categories.length - 1 || i === this.state.categories.length - 2)
      let shiftLeft = ( i < this.state.activeIndex )

      return (
        <ProjectCategory
          cat={cat}
          key={'cat-' + i}
          handleClick={this._handleClick}
          active={i === this.state.activeIndex}
          focusOff={this._focusOff}
          focused={this.state.open}
          shiftLeft={shiftLeft}
          Index={i}
          isLast={isLast}
        />
      )
  }
  render() {
    let catNodes = this.state.categories.map(this.categoryNode)
    let classes = classNames({
      focused: this.state.open
    })
    return (
      <div className={'categories--menu-container ' + classes} onClick={this._focusOff} style={{height: window.innerHeight}}>
        <ul className="categories menu">
          {catNodes}
        </ul>
      </div>
    )
  }
}

export default class App extends React.Component{
render(){
  return(
    <div className="App">
    <h1> IndieStructible Productions gallery </h1>
      <Collection/>
    </div>
  )
}
}