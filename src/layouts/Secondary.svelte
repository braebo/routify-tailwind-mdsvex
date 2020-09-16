<style>
  .secondary-layout {
    border: 1px solid green;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .secondary-layout-slot {
    border: 1px solid blue;
    margin: 1rem;
    padding: 1rem;
  }
</style>

<div class="secondary-layout">
  <h2>I'm a secondary layout with a green border.</h2>
  <p>The blue bordered box below is the slot where i put my content</p>
  <div class="secondary-layout-slot">
    <slot />
  </div>

</div>
