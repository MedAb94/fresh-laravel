<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style>
/* custom scroll bar */
::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: green;
}

</style>
