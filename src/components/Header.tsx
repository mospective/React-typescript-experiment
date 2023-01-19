type HeadingProps = { title: string }

// Same as doing this:
// const Header = ({ title }: { title: string }) => {
const Header = ({ title }: HeadingProps) => {
    return <h1>{ title }</h1>
};

export default Header;