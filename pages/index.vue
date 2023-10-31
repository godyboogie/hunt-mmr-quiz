<script setup>
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/background.jpg', { width: 1920 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
    <div class="home" :style="backgroundStyles">
        <div class="wrapper">
        <div class="text">
            <h1>Hunt showdown skill test!</h1>
        </div>
        </div>
    </div>
</template>

<style lang="scss">
.home {
    min-height: 100%;
    background-color: $black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    flex-grow: 1;
}
</style>