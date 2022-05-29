import React from 'react';

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({children, className}) => {
return <p className={className}>{children}</p>
}

Paragraph.displayName = 'Paragraph atom';

Paragraph.defaultProps = {
    className: ''
}

export default Paragraph;