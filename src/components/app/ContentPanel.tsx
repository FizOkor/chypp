// import { Menu } from 'lucide-react';

interface ContentProps {
    children?: React.ReactNode,
    className?: string
    style?: React.CSSProperties
}


const ContentPanel: React.FC<React.PropsWithChildren<ContentProps>> = ({ children, className, style }) => {
    return (
        <main 
            className={`${className} min-h-full`}
            style={style}
        >
            
                {children}
        </main>
    )
}

export default ContentPanel;