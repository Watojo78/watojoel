/**
 * Chunks an array into a specified number of columns.
 * @param arr The array to be chunked.
 * @param numColumns The number of columns to chunk the array into.
 * @returns A 2D array where each sub-array represents a column.
 */
export function chunkArray<T>(arr: T[] | undefined, numColumns: number): T[][] {
  if (!arr) {
    return [];
  }

  const numProjects = arr.length;
  const chunkedProjects = [];
  for (let i = 0; i < numColumns; i++) {
    const column = [];
    for (let j = i; j < numProjects; j += numColumns) {
      column.push(arr[j]);
    }
    chunkedProjects.push(column);
  }
  return chunkedProjects;
}
