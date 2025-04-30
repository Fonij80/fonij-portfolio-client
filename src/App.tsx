import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ThemeProvider } from "@/components/theme-provider.tsx";
// import "@fontsource/vazirmatn";
import "@fontsource/vazirmatn/700.css";

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
