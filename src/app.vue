<!--
@file: 主APP引入文件
-->
<template>
  <div class="test">
    <div class="container">
      <div class="button">button</div>
    </div>
    <div class="button" @click="onChangeTheme('a')">黄主题</div>
    <div class="button" @click="onChangeTheme('b')">红主题</div>
    <div class="button" @click="onChangeTheme()">白主题</div>
  </div>
</template>

<style lang="less">
.container {
  margin: 15px 0;
}
</style>

<script>
export default {
  methods: {
    onChangeTheme(val) {
      console.log(`theme-${val}`);
      document.body.setAttribute("class", val ? `theme-${val}` : "");
    }
  }
};
</script>
