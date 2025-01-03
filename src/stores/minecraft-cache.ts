import {writable} from "svelte/store";
import {PromiseAllUnique} from "~/utils/promise-all-unique";
import type {ModData} from "~/api/modrinth";
import type {McUploadItem} from "~/api/mc-upload";

export interface ModStore {
  projects: ModData[];
  projectsIdMap: Map<string, ModData>;
  projectsSlugMap: Map<string, ModData>;
  modAlias: Map<string, McUploadItem>;
}

export const modStore = writable<ModStore | Error | null>(
  (() => {
    (() => {
      PromiseAllUnique([
        fetch("https://api.modrinth.com/v2/user/mrmelon54/projects").then(resp => resp.json()),
        fetch("https://api.mrmelon54.com/v1/mc-upload/summary").then(resp => resp.json()),
      ])
        .then(([projects, modAlias]) => {
          let projectsIdMap: Map<string, ModData> = new Map();
          let projectsSlugMap: Map<string, ModData> = new Map();
          projects.forEach((e: ModData) => {
            projectsIdMap[e.id] = e;
            projectsSlugMap[e.slug] = e;
          });
          projects.sort((a: ModData, b: ModData) => a.title.localeCompare(b.title));
          modStore.set({projects, projectsIdMap, projectsSlugMap, modAlias});
        })
        .catch(e => modStore.set(e));
    })();
    return null;
  })(),
);
