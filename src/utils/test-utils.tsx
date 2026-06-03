/* eslint-disable react-refresh/only-export-components */
import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "../app/store";
import theme from "../theme/theme";
import { HelmetProvider } from "react-helmet-async";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
