import {writable} from "svelte/store";
import {PromiseAllUnique} from "~/utils/promise-all-unique";
import type {ModData} from "~/api/modrinth";

export interface ModStore {
  projects: ModData[];
  projectsIdMap: Map<string, ModData>;
  projectsSlugMap: Map<string, ModData>;
  modAlias: Map<string, ModStoreItem>;
}

export interface ModStoreItem {
  id: string;
  github: string;
  modrinth: string;
  curseforge: string;
}

export const modStore = writable<ModStore | Error | null>(
  (() => {
    (() => {
      PromiseAllUnique([
        fetch("https://api.modrinth.com/v2/user/mrmelon54/projects").then(resp => resp.json()),
        fetch(`https://cdn.mrmelon54.com/assets/minecraft/mods.json`).then(resp => resp.json()),
      ])
        .then(([projects, modAlias]) => {
          let projectsIdMap: Map<string, ModData> = new Map();
          let projectsSlugMap: Map<string, ModData> = new Map();
          projects.forEach((e: ModData) => {
            projectsIdMap[e.id] = e;
            projectsSlugMap[e.slug] = e;
          });
          modStore.set({projects, projectsIdMap, projectsSlugMap, modAlias});
        })
        .catch(e => modStore.set(e));
    })();
    return null;
  })(),
);
