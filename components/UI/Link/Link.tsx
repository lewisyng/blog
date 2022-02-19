export const Link = ({children, text, passHref}: {
    children?: React.ReactNode
    text?: string
    passHref?: boolean
}) => {
    return (
        <Link >{children || text}</Link>
    )
}