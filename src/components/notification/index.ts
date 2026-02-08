import { toast } from 'react-toastify';
export { ToastProvider } from './ToastProvider';

export const useNotification = () => {

    function notify(message: string, level: 'success' |  'info' | 'warning' | 'error'  ) {
        toast(message, {
            type: level,
        })
    }

    return {
        notify
    }

}