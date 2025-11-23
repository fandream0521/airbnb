

const theme = {
  color: {
    primary: "#FF385C",
    secondary: "#00848A",   
  },
  textColor: {
    primary: "#484848",
    secondary: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow .2s ease;

      &:hover {
          box-shadow: 0 2px 4px rgba(0, 0, 0, .4);
      }
    `
  }
}

export default theme;