<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Message></Message>
  </div>
</template>

<script>

import Message from '../components/Message';
export default {
  name: 'Home',
  components: {
    Message
  }
}
</script>
