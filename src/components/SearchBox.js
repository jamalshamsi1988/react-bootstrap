import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {IoSearchSharp} from 'react-icons/io5'

const SearchBox = ({setSearch,search,searchProducts}) => {
  return (
    <Container style={{alignItems:"center",textAlign:"center"}} xs={6} md={4} >
      <input
        style={{
          height: "30px",
          width: "300px",
          border: "1px solid silver",
          borderRadius: " 5px",
          backgroundColor: "#f6f6f6",
          padding: "20px",
          margin: "30px 20px 50px",
        }}
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={e => setSearch(e.target.value.toLowerCase())}
      />
       <Button variant="primary" style={{width:"50px"}} onClick={searchProducts}><IoSearchSharp/></Button>
  
    </Container>
  )
}

export default SearchBox
