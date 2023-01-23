import { createTheme } from "@mui/material/styles";

const ThemeApp = createTheme({
    palette: {
        background: {
          default: "#F2E9E4"
        }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '.8rem',
            fontWeight: 700,
            padding: "8px 30px",
            "&.dark-1": {
              background: "var(--dark-1-color)",
            },
            "&.dark-2": {
              background: "var(--dark-2-color)",
            },
            "&.txt-dark-1": {
              color: "var(--dark-1-color)",
              "&:hover": {
                background: 'rgba(154,140,152, 0.1)',
              }
            }
          }
        }
      }
    }
});

export default ThemeApp;