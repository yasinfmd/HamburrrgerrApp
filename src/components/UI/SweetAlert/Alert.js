import  swal from 'sweetalert'

const msg=(title,msg,icon)=>{
    swal({
        title: title,
        text: msg,
        icon: icon,
        button: "Tamam",
    });
}
export  default  msg
