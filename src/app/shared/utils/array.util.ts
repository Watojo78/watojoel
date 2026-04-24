/**
 * Chunks an array into a specified number of columns (Masonry distribution).
 * @param arr The array to be chunked.
 * @param numColumns The number of columns to chunk the array into.
 * @returns A 2D array where each sub-array represents a column.
 */
export function chunkArray<T>(arr: T[] | undefined | null, numColumns: number): T[][] {
  if (!arr || arr.length === 0) {
    return [];
  }

  // Crée un tableau contenant 'numColumns' tableaux vides
  const columns: T[][] = Array.from({ length: numColumns }, () => []);

  // Distribue chaque élément dans la bonne colonne grâce au modulo
  arr.forEach((item, index) => {
    columns[index % numColumns].push(item);
  });

  return columns;
}
