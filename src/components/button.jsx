export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary"]),
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-2 text-[15px] md:text-[17px] md:py-3
        text-base font-medium tracking-wide
        rounded-full
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          variant === "primary"
            ? `
  bg-blue-500 hover:bg-blue-600  
  shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35
  border-2 border-transparent hover:border-blue-400/50
  hover:scale-[1.02] active:scale-[0.98]
`
            : `
  bg-blue-100 hover:bg-blue-200  
  text-blue-900
  shadow-md shadow-blue-100/20 hover:shadow-blue-200/30
  border-2 border-blue-200/50 hover:border-blue-300
  hover:scale-[1.02] active:scale-[0.98]
`
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

import PropTypes from 'prop-types';
