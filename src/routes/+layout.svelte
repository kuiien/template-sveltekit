<script>
  import '../app.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main class="min-h-screen">
  <Header />
  <slot />
  <Footer />
</main>
