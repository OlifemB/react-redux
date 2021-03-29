import React, { useState, useEffect } from "react";
import { ErrorIndicator } from "@components/error-indicator";

export function ErrorBoundry(props) {
  const [hasError, setError] = useState(true)

  useEffect(() =>
    setError(false)
  )

  if (hasError) {
    return <ErrorIndicator />;
  }

  return props.children;
}
