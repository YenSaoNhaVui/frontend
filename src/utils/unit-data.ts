export const unitData = (arrays: any, key: string) => {
  const uniqueObjectMap = {};

  arrays.forEach((item: any) => {
    uniqueObjectMap[item[key]] = item;
  });

  const uniqueObjectArray = Object.values(uniqueObjectMap);

  return uniqueObjectArray;
};
