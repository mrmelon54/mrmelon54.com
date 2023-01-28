export async function PromiseAllUnique(promises: Promise<any>[]): Promise<any> {
  return await Promise.all(
    promises.map((promise, i) =>
      promise.catch(err => {
        err.index = i;
        throw err;
      }),
    ),
  );
}
