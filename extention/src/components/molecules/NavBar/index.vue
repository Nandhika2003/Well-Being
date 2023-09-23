<template>
  <div class="nav">
    <Links />
  </div>
</template>

<script>
import Links from './Links';

export default {
  name: 'NavBar',
  components: {
    Links
  }
};
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: 1px solid var(--nav_border);
  padding: 0 24px;
}
</style>
