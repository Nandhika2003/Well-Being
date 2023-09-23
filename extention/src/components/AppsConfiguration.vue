<template>
  <div>
    <router-view v-if="isPageUnlocked"></router-view>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs';
import utils, { PASSWORDKEY } from '../assets/js/utils';

export default {
  name: 'AppsConfiguration',
  data() {
    return {
      password: '',
      currentPassword: '',
      pageUnlocked: false,
      errorMessage: ''
    };
  },
  computed: {
    isPageUnlocked() {
      return !this.currentPassword || this.pageUnlocked;
    }
  },
  methods: {
    async getPassword() {
      const password = await utils.getData(PASSWORDKEY);
      this.currentPassword = password.password;
    },
    unlockPage() {
      if (bcrypt.compareSync(this.password, this.currentPassword)) {
        this.pageUnlocked = true;
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Please enter a valid password';
      }
    }
  },
  mounted() {
    this.getPassword();
  }
};
</script>
