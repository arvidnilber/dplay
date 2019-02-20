import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <a className="waves-effect waves-light" href={'/' + r.attributes.alternateId} key={r.id}>
        <li>
        {r.attributes.name}
        </li>
    </a>
  ))
    return <ul>{options}</ul>
    
  
  
}

export default Suggestions