// Extracted function to make the custom css colors able to use opacity with tailwind
function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

// Use the css variables defined in custom-tailwind.css to make custom tailwind classes
module.exports = {
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted')
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-bg')
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}