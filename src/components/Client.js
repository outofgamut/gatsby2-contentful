import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Client = ({ client, ...props }) => {
  return (
    <div>
      <a target="_blank" href={client.website}>
      <Img fluid={client.logo.fluid} />
        <span>{client.name}</span>
      </a>
    </div>
  )
}

export default Client
