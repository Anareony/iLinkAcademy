import React from 'react'

import right from 'shared/assets/right.svg'

import { Img, MyPagination } from './styles'

interface PaginationProps {
    marginPagesDisplayed?: number;
    pagesCount: number;
    pageRangeDisplayed?: number;
    onChange: ({ selected }: { selected: number }) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
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