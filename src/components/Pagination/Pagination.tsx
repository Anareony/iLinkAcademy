import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

import left from './img/left.svg'
import right from './img/right.svg'

export interface IPaginateProps{
    marginPagesDisplayed?: number;
    pagesCount: number;
    pageRangeDisplayed?: number;
    onChange: ({ selected }: { selected: number }) => void;
}

const Img = styled.img`
    transform: rotate(180deg);
`

const MyPagination = styled(ReactPaginate).attrs({
    activeClassName: 'active'
})`
    display: flex;
    justify-content: center;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    li a {
        padding: 7px 12.5px;
        border-radius: 4px;
        border: 1px solid #E0E0E0;
        cursor: pointer;
        margin-right: 8px;
    }

    li.active a {
        border: 1px solid #585CC6;
        color: #585CC6;
    }

    li.next {
        display: block;
    }
`

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