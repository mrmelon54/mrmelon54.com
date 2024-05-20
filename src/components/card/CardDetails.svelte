<script lang="ts">
  let clazz = undefined;
  export {clazz as class};
  export let grow: boolean = false;
</script>

<div class={clazz || `flex flex-row ${grow ? "flex-grow" : ""} justify-between items-center text-sm text-gray-400 pt-2`}>
  <slot />
</div>
