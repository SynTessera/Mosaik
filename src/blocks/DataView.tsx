"use server";

/* eslint-disable react-hooks/rules-of-hooks */
import { useData } from "@/context/DataContext";
import { DataViewProps } from "@/types/DataViewProps";

export const DataView = async ({
  initialData,
  type,
  container,
  themeName = "light",
}: DataViewProps) => {
  let data;
  try {
    data = useData();
  } catch {
    data = initialData;
  }
  const arr = Array.isArray(data) ? data : [data];
  const Container = (await import(`@/themes/${themeName}/${container}.tsx`))[
    container
  ];
  const Cmp = (await import(`@/themes/${themeName}/${type}.tsx`))[type];

  return (
    <Container>
      {arr.map((child, i) => (
        <Cmp key={child.id || i} {...child} />
      ))}
    </Container>
  );
};
