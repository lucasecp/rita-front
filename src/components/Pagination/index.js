import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SelectComponent from '../Form/Select';
import _static from './static';
import {Container,Prev,Next} from './style'


const Pagination = ({api,total}) => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const history = useHistory()

  const totalPages = Math.ceil(total / limit)

  useEffect(() => {
   console.log(currentPage);
  }, [limit]);


  const hadleChange = ({target}) =>{
  setLimit(target.value)

  }

  const prevPage = () =>{
    if(currentPage === 1) return
    setCurrentPage(currentPage - 1)
    history.push(`?page=${currentPage - 1}&limit=${limit}`)
  }

  const nextPage = () =>{
    if(currentPage === totalPages) return
    setCurrentPage(currentPage + 1)
    history.push(`?page=${currentPage + 1}&limit=${limit}`)
  }

  return (
    <Container>
      <div>
      <span>Linhas por página:</span>
      <SelectComponent
      options={_static}
      value={limit}
      onChange={hadleChange}
      variation='secondary'
      />
      </div>

      <div>
       {currentPage} - {totalPages}
        de {total}
      </div>

      <div>
       <Prev active={currentPage > 1} onClick={prevPage} />
       <Next active={currentPage < totalPages} onClick={nextPage}/>
      </div>
    </Container>
  );
};

export default Pagination;