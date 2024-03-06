import { useState, useEffect, useMemo } from 'react'

import Pagination from '../../components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Sidebar from '../../components/Sidebar/Sidebar'
import StudentsList from './StudentsList/StudentsList'
import Dropdown from '../../components/Dropdown/Dropdown'

import none from '../../shared/assets/wolf.svg'

import { Img, ImgContainer, Header, Container, Wrapper } from './styles'
import { useStore } from 'effector-react'
import { IStudent, usersStore } from '../../store/users'
import { userStore } from '../../store/store'

const Students: React.FC = () => {
    
    const [selectedSort, setSelectedSort] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);
    const [studentsPerPage] = useState<number>(6)

    const users = useStore(usersStore.$users)    

    useEffect(() => {
        userStore.getUserInfo()
        usersStore.getUsers([]);
    }, [])

    const filteredStudents = useMemo(():IStudent[] => {
        if(selectedSort === 'expelled') {
            setItemOffset(0)
            return users.filter( elem => elem.academyStatus === 'Отчислен')
        } else if (selectedSort === 'studing') {
            setItemOffset(0)
            return users.filter( elem => elem.academyStatus === 'studies')
        } else if (selectedSort === 'ended') {
            setItemOffset(0)
            return users.filter( elem => elem.academyStatus === 'Закончил')
        } else return users
    }, [selectedSort, users])
console.log(users)
    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
    }
    
    const [currentItems, setCurrentItems] = useState<IStudent[]>(filteredStudents);

    useEffect(() => {
        const endOffset = itemOffset + studentsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filteredStudents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredStudents.length / studentsPerPage));
    }, [filteredStudents, itemOffset, studentsPerPage]);
  
    const handlePageChange = (event:{selected:number}) => {
        const newOffset = event.selected * studentsPerPage % filteredStudents.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <div>
            <HeaderAdmin/>
            <Wrapper>
                <Sidebar/>
                <Container>
                    <Header>
                        <h3>Участники</h3>
                        <Dropdown 
                            value={selectedSort}
                            setSelect={sortPosts}
                            options={[
                                {value: 'Все', name: 'Все'},
                                {value: 'expelled', name: 'Отчислен'},
                                {value: 'studing', name: 'Обучается'},
                                {value: 'ended', name: 'Закончил'}
                        ]}/>
                    </Header>
                    { currentItems.length !== 0 ? 
                        <>
                            <StudentsList students={currentItems}/>
                            <Pagination
                                pagesCount={pageCount}
                                onChange={handlePageChange} 
                            />
                        </> 
                        :                       
                        <ImgContainer>
                            <Img src={none} alt='none'/>
                        </ImgContainer>
                    }   
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Students