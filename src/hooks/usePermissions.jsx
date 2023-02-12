import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionResetPermissions, actionSetPermissions } from '../actions/PermissionsActions'
import { generateConfig } from '../helper/AxiosClient'

const usePermissions = () => {
    const { permissions, token } = useSelector(state => state.permissions)
    const dispatch = useDispatch()

    const hasPermissions = useMemo(() => permissions.length > 0, [permissions])

    const autorizationHeader = useMemo(() => generateConfig(token), [token])

    const resetPermissions = _ => dispatch(actionResetPermissions())
    const setPermissions = (_permissions, _token) => dispatch(actionSetPermissions(_permissions, _token))

    const checkPermissionTab = tab => {
        if (!hasPermissions) return false

        return Boolean(permissions.find(a => a.includes(tab)))
    }

    const checkPermission = permission => {
        if (!hasPermissions) return false

        return Boolean(permissions.find(a => a == permission))
    }

    return {
        autorizationHeader,
        hasPermissions,
        token,
        checkPermissionTab,
        checkPermission,
        resetPermissions,
        setPermissions,
    }
}

export default usePermissions