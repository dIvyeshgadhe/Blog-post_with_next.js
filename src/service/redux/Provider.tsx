
/* Core */
import { Provider } from 'react-redux'
import { store } from './store'

/* Instruments */

export const Providers = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>
}