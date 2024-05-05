import postsRaw from "./posts.json";

export function sortPosts(a, b) {
  let x = -a.year.localeCompare(b.year);
  if (x !== 0) return x;
  let y = -a.month.localeCompare(b.month);
  if (y !== 0) return y;
  let z = -a.day.localeCompare(b.day);
  if (z !== 0) return z;
  return a.key.localeCompare(b.key);
}

type PostData = {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        key: string;
        title: string;
      };
    };
  };
};

export function flattenPostJson(x: PostData) {
  return Object.entries(x)
    .flatMap(x =>
      Object.entries(x[1]).flatMap(y =>
        Object.entries(y[1]).map(z => ({
          year: x[0],
          month: y[0],
          day: z[0],
          ...z[1],
        })),
      ),
    )
    .sort((a, b) => sortPosts(a, b));
}

export const posts = flattenPostJson(postsRaw);
export {postsRaw};
