import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import columns from './Columns'

const Datatable = () => {

  const item = useSelector(state => state.item)
  const size = useSelector(state => state.size)
  const searchtext = useSelector(state => state.searchtext)
  const [data, setData] = useState([])

  const fetchingData = async (itemname) => {
    await fetch(`http://localhost:4000/${itemname}`)
    .then(response => response.json())
    .then(items => {

       const filteredItems = []

       if(size !== '') {
          items.forEach(item => {
            if(item.size === size && item.name.includes(searchtext)) {
              filteredItems.push(item)
            } 
          })

          setData(filteredItems)
       }

       else if(items !== '') {
          const filterItems = []

          items.forEach(item => {
            if(item.name.includes(searchtext)) {
              filterItems.push(item)
            }
          })
          setData(filterItems)
       }

       else if(items === '' && size === '' && searchtext !== ''){
          const filterItems = []

          items.forEach(item => {
            if(item.name.includes(searchtext)) {
              filterItems.push(item)
            }
          })
          setData(filterItems)
       }

       else {
          setData(items)
       }
    }) 
  }

  useEffect(() => {
    if(item === '' && size === ''){
      fetchingData('all')
    }
    else {
      fetchingData(item)
    }
  },[item,size,searchtext])
  
  return (
    <>
       <DataTable
          title="Products"
          columns={columns}
          data={data}
       />
    </>
  )
}

export default Datatable