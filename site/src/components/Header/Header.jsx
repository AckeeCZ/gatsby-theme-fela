import PropTypes from "prop-types"
import React from "react"

const Header = ({ styles }) => (
    <div className={styles.container}>
        <h1>Look Ma, a fela header!</h1>
    </div>
);

Header.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired
    }).isRequired
};

export default Header;
