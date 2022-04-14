import React from 'react'
import cl from './ToastSucces.module.css'
import cross from './img/cross.svg'
import success from './img/success.svg'

const ToastSucces = ({show, setShow, title, body}) => {

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
				<p>{title}</p>
				<button onClick={close} className={cl.button}>
					<img src={cross} alt='cross'/>
				</button>
			</div>
			<div className={cl.content}>
				<p>{body}</p>
			</div>
			<img className={cl.success} src={success} alt='succes'/>
		</div>
	)
}

export default ToastSucces