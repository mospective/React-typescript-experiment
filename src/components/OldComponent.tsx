import React, { ReactNode } from 'react'

type OldProps = {
    title?: string,
    children: ReactNode
}


// const OldComponent: React.FC<{title: string}> = ({ title, children }) => {
//     return (
//         <section>
//             <h2>{ title }</h2>
//             {children}
//         </section>
//     );
// };

// The above is the old way to setting Typescript for React component.

const OldComponent2 = ({ children, title = "subheading" }: OldProps) => {
    return (
        <section>
            <h2>{ title }</h2>
            {children}
        </section>
    )
};

// The current way to setting Typescript for React component. ^^^

export default OldComponent2