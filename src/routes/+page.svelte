<script>
  export let data
</script>

<svelte:head>
  <title>SvelteKit Starter Template</title>
</svelte:head>

<main>
  <section>
    <div class="flex flex-col px-8 py-20 items-center">
      <div class="flex-none mb-4 mr-8 text-center text-3xl font-black md:text-4xl lg:mb-0 lg:text-6xl">
        SvelteKit Starter Template
      </div>
      <div class="flex-none mb-4 mt-4 mr-8 text-gray-600 text-center md:text-xl lg:mb-0 lg:text-2xl">
        {`“${data.post?.title}”`}
      </div>
    </div>
  </section>
</main>
