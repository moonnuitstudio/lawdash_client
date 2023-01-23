import SimpleModal from "../gui/modals/SimpleModal"
import NewContactForms from "../forms/NewContactForms";

import useToastify from "../../hooks/useToastify";

const NewContactModal = ({isOpen, handleClose}) => {

    const { showMessageToast } = useToastify()

    const onSubmit = data => {
        console.log(data)

        showMessageToast('Contact added successfuly!')
        handleClose()
    }

    return (
        <SimpleModal isOpen={isOpen} handleClose={handleClose} title="Add New Contact">
            <NewContactForms onSubmit={onSubmit} onCancel={handleClose} />
        </SimpleModal>
    )
}

export default NewContactModal