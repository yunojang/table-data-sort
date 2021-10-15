import { BASE_URL } from "utils/api";
import { COLUMNS } from "../constant/column";
import cachingDecorator from "utils/cachingDecorator";

export const loadResult = async () => {
  const response = await fetch(`${BASE_URL}/result`);

  if (response.status !== 200) {
    throw response.statusText;
  }

  const loadedList = await response.json();

  if (loadedList.length < 1) {
    throw "결과가 없습니다.";
  }

  const countColumn = (list) => {
    const [name, ...figures] = list[0];

    return figures.length;
  };

  if (countColumn(loadedList) !== COLUMNS.length) {
    throw "Column의 개수가 다릅니다.";
  }

  const mappingList = ([name, ...figures], index) => ({
    id: index,
    name,
    figures,
  });

  return loadedList.map(mappingList);
};

let loadSubList = async (name) => {
  const response = await fetch(`${BASE_URL}/result/${name}`);

  const loadedSubList = await response.json();

  const mappingSubList = ([id, ...figures]) => ({
    id,
    figures,
  });

  return loadedSubList.map(mappingSubList);
};

loadSubList = cachingDecorator(loadSubList);

export { loadSubList };
