import { HeaderAdmin } from "widgets/HeaderAdmin"
import { StudentList } from "widgets/StudentList"
import { AdminNavBar } from "shared/ui/AdminNavBar"
import { AdminTemplate } from "shared/ui/AdminTemplate"
import { Footer } from "shared/ui/Footer/Footer"

export const StudentsPage = () => {
    
    return (
        <>
            <AdminTemplate
                header={<HeaderAdmin/>}
                nav={<AdminNavBar/>}
                main={<StudentList/>}
                footer={<Footer/>}
            />
        </>
    )
}