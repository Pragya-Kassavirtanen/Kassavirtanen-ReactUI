import React from 'react'
import FontAwesome from 'react-fontawesome'

/**
 * @author Skylar Kong
 */

const NavIcon = ({name, size, sectionClass, iconClass, content}) =>
  <section className={sectionClass}>
    <FontAwesome name={name} size={size} className={iconClass}/>
    <p>{content}</p>
  </section>

export default NavIcon
