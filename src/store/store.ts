import axios from 'axios'
import { createEffect } from 'effector'

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
}

const params = new URLSearchParams({
    'email': 'Chudoyakov.roman@gmail.com',
    'password': 'Qw2222@@'
});

const setData = createEffect( async () =>{
    await axios.post("https://academtest.ilink.dev/user/signIn", params, config )
        .then(response => {
            localStorage.setItem('key', response.data.accessToken)
        })
})

setData()

//@ts-ignore
const key:string = 'Bearer ' + localStorage.getItem('key')

const getData = createEffect(async () =>{
    await axios.get("https://academtest.ilink.dev/user/getUserProfile", {
        headers: {
            'Authorization': key
        }
    })
        .then(response => {
            console.log(response)
        })
})

getData()

const getDataReview = createEffect(async () =>{
    await axios.get("https://academtest.ilink.dev/reviews/getAll", {
        headers: {
            'Authorization': key
        }
    })
    .then(response => {
        console.log(response)
    })
})

getDataReview()


const setCaptcha = createEffect( async () =>{
    await axios.get("https://academtest.ilink.dev/reviews/getCaptcha")
        .then(response => {
            console.log(response)
        })
})

setCaptcha()
export {getData}
