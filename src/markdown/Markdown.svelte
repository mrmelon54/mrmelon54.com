<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import hljs from "highlight.js";
  import {marked} from "marked";

  export let source: string;
  const tokens = marked.lexer(source, {
    highlight: function (code, lang) {
      console.log("Highlight: " + lang);
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, {language}).value;
    },
    langPrefix: "hljs language-",
  });
  console.log(tokens);
</script>

<div class="markdown-body">
  <SvelteMarkdown source={tokens} />
</div>
