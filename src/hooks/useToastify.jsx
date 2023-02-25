import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

const useToastify = () => {
    
    const showErrToast = (msg) => {

        toast.error(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const showMessageToast = (msg) => {

        toast.success(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return {
        showErrToast,
        showMessageToast
    }
}

export default useToastify