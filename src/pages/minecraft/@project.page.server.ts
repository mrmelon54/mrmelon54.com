export async function prerender() {
  let userProjects = await fetch("https://api.modrinth.com/v2/user/mrmelon54/projects").then(resp => resp.json());
  return userProjects.map(x => `/minecraft/${x.slug}`);
}
