import React from 'react';

interface FeaturedProjectProps {}

const FeaturedProject: React.FC<FeaturedProjectProps> = () => {
return <section className="order-3 col-span-3 row-span-1 lg:col-span-2 lg:row-span-2 ">FeaturedProject</section>
}

FeaturedProject.displayName = 'FeaturedProject';

export default FeaturedProject;