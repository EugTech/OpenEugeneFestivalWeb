import React from 'react'

const ProjectCard = props => {
  return (
    <div>
      <h3 className="projectName">{props['Project Name']}</h3>
      <h4>Created by: {props['Your Name']}</h4>
      <ul>
        <li>Type of Project: {props['Type of Project']}</li>
        <li>
          Stage of Project: {props['What stage is your project in today?']}
        </li>
        <li>Description: {props['Longer Description']}</li>
        {props['Link to GitHub or other Repo, Google docs, etc.'] === '' ? (
          ''
        ) : (
          <li>
            <a href={props['Link to GitHub or other Repo, Google docs, etc.']}>
              Find out more!
            </a>
          </li>
        )}
      </ul>
      <hr />
    </div>
  )
}

export default ProjectCard
