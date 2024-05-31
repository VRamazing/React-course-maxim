import React from 'react';

const Tabs = ({children, buttons, ButtonsContainer = "menu"}) => {
    // Must be capital ButtonsContainer
    return (
        <>
            <ButtonsContainer>
                { buttons }
            </ButtonsContainer>
            {children}
        </>
    );
}

export default Tabs;
