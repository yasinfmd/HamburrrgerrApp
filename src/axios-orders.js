import  axios from 'axios'

const instance=
axios.create(
    {
        baseURL:"https://react-burger-7ad52.firebaseio.com/"
    }
)
export  default  instance
