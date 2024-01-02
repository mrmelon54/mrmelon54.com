export async function prerender() {
  let userProjects = await fetch("https://api.modrinth.com/v2/user/mrmelon54/projects").then(resp => resp.json());
  return userProjects.flatMap(x => [`/minecraft/${x.slug}`, `/minecraft/${x.slug}/versions`, `/minecraft/${x.slug}/about`]);
}
