import React from 'react'
import cl from './ToastError.module.css'
import cross from './img/cross.svg'
import fail from './img/fail.svg'

const ToastError = ({show, setShow}) => {

	const rootClasses = [cl.toast]

	if(show) {
		rootClasses.push(cl.active)
	}

    const close = (e) => {
        e.preventDefault()
        setShow(false)
    }

	return (
		<div className={rootClasses.join(' ')}>
			<div className={cl.header}>
				<p>Что-то не так...</p>
				<button onClick={close} 
                    className={cl.button}
                >
					<img src={cross} alt='cross'/>
				</button>
			</div>
			<div className={cl.content}>
				<p>Не получилось отправить код.<br/>Попробуйте еще раз!</p>
			</div>
			<img className={cl.error} src={fail} alt='fail'/>
		</div>
	)

}

export default ToastError