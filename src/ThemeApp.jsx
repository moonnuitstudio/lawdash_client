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
            "&.active": {
              background: 'rgba(154,140,152, 0.1)',
            },
            "&.dark-1": {
              background: "var(--dark-1-color)",
            },
            "&.dark-2": {
              background: "var(--dark-2-color)",
            },
            "&.txt-dark-1": {
              color: "var(--dark-1-color)",
              '&.opacity-5': {
                color: "rgba(34,34,59,.5)",
              },
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