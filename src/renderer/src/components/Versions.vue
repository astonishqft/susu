<script setup>
import { reactive } from 'vue'

console.log(11122)
const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="versions">
    <li class="electron-version">Electron v1{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v2{{ versions.chrome }}</li>
    <li class="node-version">Node v3{{ versions.node }}</li>
    <li class="v8-version">V8 v4{{ versions.v8 }}</li>
  </ul>
</template>
