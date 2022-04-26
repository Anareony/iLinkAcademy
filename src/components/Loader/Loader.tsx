import React from 'react'
import styled, { keyframes } from 'styled-components'

const white = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(50px, 0)
    }

    37.5%, 50% {
        transform: translate(50px, 50px)
    }

    62.5%, 75% {
        transform: translate(0, 50px)
    }
`

const lightllue = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(0, 50px)
    }

    37.5%, 50% {
        transform: translate(-50px, 50px);
    }

    62.5%, 75%  {
        transform: translate(-50px, 0px);
    }
`
const blue = keyframes`
    0%, 87.5% {
        transform: translate(0, 0)
    }

    12.5%, 25% {
        transform: translate(0, -50px)
    }

    37.5%, 50% {
        transform: translate(50px, -50px)
    }
    
    62.5%, 75% {
        transform: translate(50px, 0px)
    }
`
const White = styled.div`
    width: 40px;
    height: 40px;
    background: #E0E0E0;
    border-radius: 10px;
    margin-right: 10px;
    animation: ${white} 3s cubic-bezier(.50, 0, 0, 1)  0.3s infinite;
`

const LightBlue = styled.div`
    width: 40px;
    height: 40px;
    background: #797DDF;
    border-radius: 10px;
    animation: ${lightllue} 3s cubic-bezier(.50, 0, 0, 1) 0.1s infinite;
`
const Blue = styled.div`
    width: 40px;
    height: 40px;
    background: #585CC6;
    border-radius: 10px;
    animation: ${blue} 3s cubic-bezier(.50, 0, 0, 1) 0.6s infinite;

`

const Top = styled.div`
    display: flex;
    margin-bottom: 10px;
`

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