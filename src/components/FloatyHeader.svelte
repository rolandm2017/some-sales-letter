<script>
  import BigBeautifulButton from './BigBeautifulButton.svelte'
  import HeaderButton from './HeaderButton.svelte'
</script>

<div class="w-full h-24 fixed flex justify-center bg-nigh-black">
  <div class="w-11/12 sm:w-10/12 md:w-8/12 flex justify-between">
    <div class="mr-4 h-full flex justify-start items-center">
      <!-- large screen -->
      <h2 class="text-off-white text-2xl font-bold hidden lg:block">The Cicada Sales Letter</h2>
      <!-- medium screen -->
      <h2 class="text-off-white text-2xl font-bold hidden sm:block lg:hidden">
        The Cicada<br /> Sales Letter
      </h2>
      <!-- small screen -->
      <h2 class="text-off-white text-lg font-bold sm:hidden block">
        The Cicada <br /> Sales Letter
      </h2>
    </div>
    <div class="flex items-center">
      <HeaderButton />
    </div>
  </div>
</div>
