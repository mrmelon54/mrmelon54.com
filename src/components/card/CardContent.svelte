<script lang="ts">
  let clazz = undefined;
  export {clazz as class};
</script>

<p class={clazz || "text-gray-400"}><slot /></p>
