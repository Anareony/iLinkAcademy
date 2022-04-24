import { useState, useEffect, useMemo } from 'react'

import Pagination from '../../components/Pagination/Pagination'

import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import StudentsList from './StudentsList/StudentsList'

import { IStudent } from '../../types/types'
import Dropdown from '../../components/Dropdown/Dropdown'

import none from '../../shared/assets/wolf.svg'

import { Img, ImgContainer, Header, Container, Wrapper } from './styles'

const Students: React.FC = () => {

    const [students] = useState<IStudent[]>(require('../../students.json'))
    
    const [selectedSort, setSelectedSort] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);
    const [studentsPerPage] = useState<number>(6)

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
    
    const [currentItems, setCurrentItems] = useState<IStudent[]>(filtredStudents);

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
                    :   <ImgContainer>
                            <Img src={none} alt='none'/>
                        </ImgContainer>
                }
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Students