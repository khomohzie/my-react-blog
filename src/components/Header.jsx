import React, { Fragment } from 'react';
import Media from 'react-media'

// import ModernNav from './navs/ModernNav'
import LargeNav from './navs/LargeNav'

import UseSticky from '../helpers/UseSticky'

const Header = () => {
    const { isSticky } = UseSticky()

    return (

        <div>

            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <LargeNav sticky={isSticky} />}
                        {matches.medium && <LargeNav sticky={isSticky} />}
                        {matches.large && <LargeNav sticky={isSticky} />}
                    </Fragment>
                )}
            </Media>

        </div>

    );

}

export default Header