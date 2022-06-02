import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <ButtonGroup>
      {gotoPrevPage && <Button variant="warning" size="lg" onClick={gotoPrevPage}>Previous</Button>}
      {gotoNextPage && <Button variant="danger" size="lg" onClick={gotoNextPage}>Next</Button>}
    </ButtonGroup>
  )
}
