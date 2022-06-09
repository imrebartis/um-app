import styles from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    clicked?: {
      color: string;
      borderColor: string;
    };
    notClicked?: {
      color: string;
      borderColor: string;
    };
  }

  interface ThemeOptions {
    clicked?: {
      color: string;
      borderColor: string;
    };
    notClicked?: {
      color: string;
      borderColor: string;
    };
  }
}
