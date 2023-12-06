export const unitData = (arrays: any, key: string) => {
  const uniqueObjectMap = {};
  const arraysTmp = [];

  arrays?.map((array: any) => {
    if (!uniqueObjectMap[array[key]]) {
      arraysTmp.push(array);
      uniqueObjectMap[array[key]] = true;
    }
  });

  return arraysTmp;
};
