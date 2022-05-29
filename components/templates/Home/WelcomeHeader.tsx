import React from 'react';

interface WelcomeHeaderProps {}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = () => {
return <header className="col-span-3 order-1 lg:order-2 lg:col-span-2 lg:row-end-1 border-b border-slate01 pb-6">WelcomeHeader</header>
}

WelcomeHeader.displayName = 'WelcomeHeader';

export default WelcomeHeader;