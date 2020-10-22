<script lang="ts">
  import { Router } from '@roxi/routify/runtime';
  import { routes } from '../.routify/routes';
  import '../public/fonts.css';
  import './css/tailwind.css';
  import './css/global.css';
  import './css/roxi.css';
</script>

<Router {routes} />