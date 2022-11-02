<script>
  import { page } from '$app/stores'

  $: currentRoute = $page.url.pathname
</script>

<nav class="flex items-center p-4 lg:px-6">
  <div class="flex w-1/3 items-center">
    CURRENT ROUTE: {currentRoute}
  </div>
</nav>
