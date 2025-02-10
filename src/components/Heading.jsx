import React from "react";
import PropTypes from "prop-types";

const sizes = {
    textxs: "text-[1.25rem] font-medium lg:text-[1.06rem]",
    texts: "text-[1.38rem] font-medium lg:text-[1.13rem]",
    textmd: "text-[1.50rem] font-medium lg:text-[1.25rem] md:text-[1.38rem]",
    textlg: "text-[1.63rem] font-medium lg:text-[1.38rem] md:text-[1.50rem] sm:text-[1.38rem]",
    headingxs: "text-[1.25rem] font-semibold lg:text-[1.06rem]",
    headings: "text-[1.38rem] font-semibold lg:text-[1.13rem]",
    headingmd: "text-[1.50rem] font-bold lg:text-[1.25rem] md:text-[1.38rem]",
    headinglg: "text-[1.63rem] font-semibold lg:text-[1.38rem] md:text-[1.50rem] sm:text-[1.38rem]",
    headingxl: "text-[1.88rem] font-semibold lg:text-[1.56rem] md:text-[1.75rem] sm:text-[1.63rem]",
    heading2xl: "text-[3.75rem] font-bold lg:text-[3.19rem] md:text-[3.25rem] sm:text-[2.88rem]",
    heading3xl: "text-[3.88rem] font-extrabold lg:text-[3.88rem] md:text-[3.00rem]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
    const Component = as || "h6";
    
    return (
        <Component className={`text-gray-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

// ✅ Add PropTypes validation
Heading.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is provided
    className: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(sizes)), // Validate size against the defined keys
    as: PropTypes.elementType, // Allow any valid HTML/React element type
};

export default Heading;
