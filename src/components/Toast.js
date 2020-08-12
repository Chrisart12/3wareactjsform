import React from 'react';
import { Slide, toast } from 'react-toastify';

toast.configure({
    transition: Slide,
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
});

//Component de notification en cas de succèss
// export function ConnectionSuccess(props) {
//     return (
//         <div style={{ textAlign: "center", fontSize: "20px", color: "white"}} >
//             Bienvenue {props.firstname}
//         </div>
//     )
// }

// Fonction d'appelle en cas de réussite
export const ConnectionSuccessNotify = (firstname) => {
    toast.success(`Bienvenue ${firstname}`)
}

//Component de notification en cas d'erreur
export function ConnectionError() {
    return (
        <div style={{ textAlign: "center", fontSize: "20px", color: "white"}} >
            Le mail ou le mot de passe est erroné
        </div>
    )
}

// Fonction d'appelle en cas d'erreur
export const ConnectionErrorNotify = () => {
    toast.error(<ConnectionError />)
}

