<script lang="ts">
  import { url } from '@roxi/routify/runtime';
</script>

<style lang="postcss">
  #app {
    display: grid;
    min-height: 100vh;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content 1fr auto;
    grid-gap: 1rem;
  }
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-bottom: 1px solid orangered;
  }
  main {
    margin: 0 auto;
    max-width: 1280px;
  }
  footer {
    @apply flex items-center content-center mt-1 border-t-4 border-gray-700
  }
</style>

<div id="app">
  <nav>
    <a href={$url('/')}>Home</a>
    <a href={$url('/mdsvex')}>MDSveX</a>
    <a href={$url('/README')}>README</a>
  </nav>
  <main>
    <slot />
  </main>
  <footer>footer</footer>
</div>
