import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let info = "";

  if (error instanceof Error) {
    info = error.message;
  } else if (isRouteErrorResponse(error)) {
    info = `${error.status}: ${error.statusText}\n${error.data}`;
  } else {
    info = `${error}`;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{info}</i>
      </p>
    </div>
  );
}
