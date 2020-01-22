import PropTypes from "prop-types"
import React from "react"

const Header = ({ styles }) => (
    <div className={styles.container}>
        <span>Look Ma, a fela header!</span>
    </div>
);

Header.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};

export default Header;
