import React from 'react';

export default class ProjectList extends React.Component {
    createProjectListItem(project) {
        let byline = project.acf.project_byline
        let client = project.acf.project_client
        return (
            <li key={'project-' + project.id}>
                <a to={'/projects/' + project.slug}>
                  <h3 className="projectlist--client">{client}</h3>
                  <h4 className="projectlist--byline">{byline}</h4>
                </a>
            </li>
        );
    }
    render() {
        return (
            <div className="project-list">
                <ul className="menu vertical">
                  { this.props.projects.map( this.createProjectListItem ) }
                </ul>
            </div>
        )
    }
  }