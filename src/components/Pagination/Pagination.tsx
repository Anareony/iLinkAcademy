import React from 'react'

import right from './img/right.svg'

import { Img, MyPagination } from './styles'

type IPaginateProps = {
    marginPagesDisplayed?: number;
    pagesCount: number;
    pageRangeDisplayed?: number;
    onChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<IPaginateProps> = ({
    marginPagesDisplayed = 2,
    pagesCount,
    pageRangeDisplayed = 2,
    onChange,
}) => {
    return (
        <MyPagination 
            marginPagesDisplayed={marginPagesDisplayed}
            pageCount={pagesCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={onChange}
            breakLabel="..."
            previousLabel={
                <Img src={right} alt='left'/>
            }
            nextLabel={
                <img src={right} alt='right'/>
            }
        />
    )
}

export default Pagination