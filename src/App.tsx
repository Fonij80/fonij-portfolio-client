import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "@fontsource/vazirmatn/700.css";
import { CustomToast } from "./components/ui/extra";

function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
      <CustomToast />
    </ThemeProvider>
  );
}

export default App;
