import type React from "react";

interface ContextProps {
    children?: React.ReactNode,
    className?: string
    style?: React.CSSProperties
}

const ContextPanel: React.FC<React.PropsWithChildren<ContextProps>> = ({ children, className, style }) => {
    return (
        <div 
            className={`${className} text-popover-foreground overflow-y-auto`}
            style={style}
        >
            {children}
        </div>
    )
}

export default ContextPanel;