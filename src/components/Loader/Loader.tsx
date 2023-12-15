import React from 'react'
import { White, LightBlue, Blue, Top } from './styles'

const Loader: React.FC = () => {
    return (
        <div>
            <Top>
                <White/>
                <LightBlue/>
            </Top>
            <Blue/>
        </div>
    )
}

export default Loader