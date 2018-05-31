import React from 'react';
import classNames from 'classnames';
import ProjectList from './ProjectList';

export default class ProjectCategory extends React.Component {
    constructor(props) {
        super(props)
  
        this.setActive = this.setActive.bind(this)
  
        this.state = {
          projects: []
        }
    }
    componentWillMount() {
      // this.getProjects(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
      this.setState({
        projects: [
          {
            "acf": {
              "project_byline": "A fully custom built guitar",
              "project_description": "Enim est qui Lorem officia adipisicing irure minim. Eu enim fugiat cupidatat elit anim pariatur irure quis aute velit enim. Adipisicing consequat sunt eiusmod reprehenderit nisi fugiat esse ut. Consequat ea ad deserunt mollit quis labore Lorem do qui officia labore. Incididunt reprehenderit anim sunt velit sunt est sit anim.",
              "project_client": "IndieStructible",
              "project_thumbnail": "INSERT SCUM URL",
              "project_category": "aute"
            },
            "tags": [
              "incididunt"
            ],
            "categories": [
              2
            ],
            "excerpt": {
              "rendered": "Eiusmod reprehenderit incididunt aute do commodo sint laboris exercitation Lorem excepteur sit cillum aute irure."
            },
            "content": {
              "rendered": "Enim id ex excepteur incididunt in deserunt mollit eiusmod adipisicing officia quis aliquip. Qui aute et consequat consectetur aute consectetur laborum. Non non sint reprehenderit velit proident aliqua elit eiusmod laboris veniam elit ea. Incididunt excepteur et esse minim amet in magna ea enim."
            },
            "title": {
              "rendered": "non"
            },
            "link": "https://seanma.de",
            "guid": "7d115e77-9566-4389-b544-deffaf76d058",
            "slug": "proident",
            "id": "58653533ca121cbaf664b199"
          }
        ]
      })
    }
    setActive() {
        this.props.handleClick(this.props.Index)
    }
    getWidth(isActive) {
        let w = !isActive ? 'calc(20vw - 20px)' : '500px'
        return w
    }
    render() {
        let { active, focused, shiftLeft, isLast } = this.props
  
        let styles = {
          container: { 
            transform: (function() {
                return active
                    ? 'scale(1.1) translate3d(0, 0, 0)'
                    : 'scale(1) translate3d(0, 0, 0)'
            })()
          }, item: {
              transform: (function() {
                  let direction = (shiftLeft) ? '-': ''
                  let transform = (focused && !active) ? 'translate3d('+ direction +'100%, 0, 0)' : 'translate3d(0, 0, 0)'
                  return transform
              })()
          }, background: {
              background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
              backgroundSize: 'cover',
              height: '500px',
              width: (this.getWidth(active))
          }
        }
        let classes = classNames({category: true, isActive: active, isLast, shiftLeft})
        return (
            <li className={classes} style={styles.item}>
                <div className="category--content">
                    <h2>{this.props.cat.name}</h2>
                    <ProjectList projects={this.state.projects}/>
                </div>
                <div className="category--image-container" onClick={this.setActive} style={styles.container}>
                    <div className="category--image" style={styles.background}></div>
                </div>
                <div className="category--name">
                  <h6>{this.props.cat.name}</h6>
                </div>
                <div className="category--closeButton">
                  <a href="#">Back</a>
                </div>
            </li>
        )
    }
  }