import { ErrorPage } from "./components/ErrorPage";

export default function ErrorBoundary({ children, hasError }) {
  return hasError ? <ErrorPage /> : children;
}
