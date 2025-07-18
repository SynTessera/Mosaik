import React, { useEffect, useState, ReactElement } from "react";

export function createClientWrapper<ClientProps>(
  ClientComponent: React.ComponentType<ClientProps>
) {
  return function ClientWrapper(
    props: ClientProps & { Component: ReactElement }
  ) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (mounted) {
      return <ClientComponent {...props} />;
    }

    // Show the server-side rendered fallback component initially
    return props.Component;
  };
}
