import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

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

export { Img, MyPagination }