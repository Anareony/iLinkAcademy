import { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination/Pagination'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import StudentsList from './StudentsList/StudentsList'

import { IStudent } from '../../types/types'
import Dropdown from '../../components/Dropdown/Dropdown'


const Wrapper = styled.div`
    display: flex;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    margin: 59px 80px 0 26px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Students: React.FC = () => {

    const [students, setStudents] = useState<IStudent[]>(require('../../students.json'))
    const [selectedSort, setSelectedSort] = useState('')

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [studentsPerPage] = useState(6)

    const filtredStudents = useMemo(():IStudent[] => {
        if(selectedSort === 'expelled') {
            setItemOffset(0)
            return [...students].filter( elem => elem.status === 'Отчислен')
        } else if (selectedSort === 'styding') {
            setItemOffset(0)
            return [...students].filter( elem => elem.status === 'Обучается')
        } else if (selectedSort === 'ended') {
            setItemOffset(0)
            return [...students].filter( elem => elem.status === 'Закончил')
        }
        return students
    }, [selectedSort, students])

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
    }
    
    const [currentItems, setCurrentItems] = useState(filtredStudents);

    useEffect(() => {
        const endOffset = itemOffset + studentsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filtredStudents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filtredStudents.length / studentsPerPage));
    }, [filtredStudents, itemOffset, studentsPerPage]);
  
    const handlePageChange = (event:{selected:number}) => {
        const newOffset = event.selected * studentsPerPage % filtredStudents.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar whoIsActive={'students'}/>
                { students.length !== 0
                    ?   <Container>
                            <Header>
                                <h3>Участники</h3>
                                <Dropdown 
                                    value={selectedSort}
                                    setSelect={sortPosts}
                                    options={[
                                        {value: 'Все', name: 'Все'},
                                        {value: 'expelled', name: 'Отчислен'},
                                        {value: 'styding', name: 'Обучается'},
                                        {value: 'ended', name: 'Закончил'}
                                ]}/>
                            </Header>
                            <StudentsList students={currentItems}/>
                            <Pagination
                                pagesCount={pageCount}
                                onChange={handlePageChange} 
                            />
                        </Container>
                    : <h1>'none'</h1>
                }
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Students