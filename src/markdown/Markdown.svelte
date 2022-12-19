<script lang="ts">
  import hljs from "highlight.js";
  import {marked} from "marked";
  import DOMPurify from "dompurify";

  export let source: string;
  const options = {
    ...marked.defaults,
    highlight: function (code, lang) {
      console.log("Highlight: " + lang);
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, {language}).value;
    },
    langPrefix: "hljs language-",
  };
</script>

<div class="markdown-body">
  {@html DOMPurify.sanitize(marked(source, options))}
</div>
