<template>
    <div class="quizContainer">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .quizContainer {
        flex: 1;
        max-height: 90vh;
        width: calc(100% - 10vh);
        max-width: 800px;
        border-radius: 20px;
        background-color: rgba($black, 0.5);
        backdrop-filter: blur(10px);
        padding: 3rem;
    }
</style>