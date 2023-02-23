import { createContext } from "react";

const RightMenuContext = createContext({ contextMenuXRef: null, })

export const RightMenuProvider = RightMenuContext.Provider

export const RightMenuConsumer = RightMenuContext.Consumer