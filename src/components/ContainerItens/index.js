import React from "react";

import {ContainerItens as ContItens} from "./style"

function ContainerItens ({children, isBlur}) {
    return <ContItens isBlur={isBlur}>{children}</ContItens>
}

export default ContainerItens;