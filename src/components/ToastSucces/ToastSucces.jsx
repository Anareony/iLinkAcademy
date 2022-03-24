import React from 'react'
import cl from './ToastSucces.module.css'
import cross from './img/cross.svg'
import success from './img/success.svg'

const ToastSucces = ({show, setShow}) => {

	const rootClasses = [cl.toast]

	if(show) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(' ')}>
			<div className={cl.header}>
				<p>Успешно!</p>
				<button onClick={() => setShow(false)} className={cl.button}>
					<img src={cross} alt='cross'/>
				</button>
			</div>
			<div className={cl.content}>
				<p>Спасибо за отзыв о нашей<br/> компании :)</p>
			</div>
			<img className={cl.success} src={success} alt='succes'/>
		</div>
	)
}

export default ToastSucces