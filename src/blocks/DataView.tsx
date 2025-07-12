"use server";

/* eslint-disable react-hooks/rules-of-hooks */
import { useData } from "@/context/DataContext";

export const DataView = async ({
  initialData,
  type,
  container,
  theme = "light",
}) => {
  let data;
  try {
    data = useData();
  } catch {
    data = initialData;
  }
  const arr = Array.isArray(data) ? data : [data];
  const Container = (await import(`@/themes/${theme}/${container}.tsx`))[
    container
  ];
  const Cmp = (await import(`@/themes/${theme}/${type}.tsx`))[type];

  console.log(
    "DATA VIEW",
    container,
    type,
    Container,
    `@/themes/${theme}/${container}.tsx`
  );
  return (
    <Container>
      {arr.map((child, i) => (
        <Cmp key={child.id || i} {...child} />
      ))}
    </Container>
  );
};
