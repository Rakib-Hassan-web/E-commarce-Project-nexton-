import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import axios from 'axios'
import Pagination from './Pagination'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const AllProduct = ({ Showdetails }) => {
  const reduxProduct = useSelector((state) => state.product.value)
  console.log(reduxProduct)

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (!reduxProduct) return setProducts(res.data)
        const FilterP = res.data.filter((item) => item.title === reduxProduct)
        setProducts(FilterP)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [reduxProduct])

  const navigate = useNavigate()

  const handelShow = (Info) => {
    navigate(`/Product/${Info.id}`)
    console.log(Info)
  }

  // --------------local storage--------
  const handlecart = (data) => {
    const myArray = JSON.parse(localStorage.getItem('ProductKey')) || []
    myArray.push(data)
    localStorage.setItem('ProductKey', JSON.stringify(myArray))
  }

  const start = (page - 1) * itemsPerPage
  const currentItems = products.slice(start, start + itemsPerPage)
  const totalPages = Math.ceil(products.length / itemsPerPage)

  return (
    <>
      <div className='w-full'>
        {/* ----------Product grid---------- */}
        <div
          className='
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            mt-6
          '
        >
          {currentItems.map((item, i) => (
            <Singleres
              key={i}
              cartclick={() => handlecart(item.id)}
              Showdetails={() => handelShow(item)}
              className={'overflow-ellipsis'}
              pimage={item.images[0]}
              pname={item.category.slug}
              pprice={item.price}
              pacce={item.title}
            />
          ))}
        </div>

        {/* ----------Pagination---------- */}
        <div className='flex justify-center mt-10'>
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  )
}

export default AllProduct
