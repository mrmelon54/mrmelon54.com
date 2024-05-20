<script lang="ts">
  let clazz = undefined;
  export {clazz as class};
</script>

<h3 class={clazz || "text-2xl my-2 text-gray-200"}><slot /></h3>
