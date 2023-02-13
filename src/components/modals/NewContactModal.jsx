import SimpleModal from "../gui/modals/SimpleModal"
import NewContactForms from "../forms/NewContactForms";

import useToastify from "../../hooks/useToastify";
import useContacts from "../../hooks/useContacts";

const NewContactModal = ({isOpen, handleClose}) => {

    const { showMessageToast } = useToastify()

    const { addNewContact } = useContacts()

    const onSubmit = data => {
        addNewContact(data)
        handleClose()
    }

    return (
        <SimpleModal isOpen={isOpen} handleClose={handleClose} title="Add New Contact">
            <NewContactForms onSubmit={onSubmit} onCancel={handleClose} />
        </SimpleModal>
    )
}

export default NewContactModal