import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            <div>{children}</div>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
}

export default Section;