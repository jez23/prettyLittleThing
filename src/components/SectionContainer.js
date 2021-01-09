import React from 'react';

const SectionContainer = ( {children} ) => {
    return (
        <section className="container">
            <div className="container__inner">
                { children }
            </div>
        </section>
    )
}

export default SectionContainer;