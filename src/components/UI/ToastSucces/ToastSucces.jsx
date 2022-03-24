import React from 'react'
import cl from './ToastSucces.module.css'


const ToastSucces = ({visibleToast, setVisibleToast}) => {

  const rootClasses = [cl.modal]

  if(visibleToast) {
      rootClasses.push(cl.active)
  }

  return (
    <div className={cl.toast}>
        <div className="header">
            Успешно!
        </div>
        <div className="content">
            Спасибо за отзыв о нашей компании :)
        </div>
    </div>
  )
}

export default ToastSucces