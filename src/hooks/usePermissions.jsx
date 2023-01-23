import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionResetPermissions, actionSetPermissions } from '../actions/PermissionsActions'

const usePermissions = () => {
    const { permissions } = useSelector(state => state.permissions)
    const dispatch = useDispatch()

    const hasPermissions = useMemo(() => permissions.length > 0, [permissions])

    const resetPermissions = _ => dispatch(actionResetPermissions())
    const setPermissions = (_permissions, token) => dispatch(actionSetPermissions(_permissions, token))

    const checkPermissionTab = tab => {
        if (!hasPermissions) return false

        return Boolean(permissions.find(a => a.includes(tab)))
    }

    const checkPermission = permission => {
        if (!hasPermissions) return false

        return Boolean(permissions.find(a => a == permission))
    }

    return {
        hasPermissions,
        checkPermissionTab,
        checkPermission,
        resetPermissions,
        setPermissions,
    }
}

export default usePermissions