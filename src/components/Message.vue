<template>
  <div>
    <img alt="Vue logo" src="../assets/poster.jpeg" width="800" height="450"><br><br>
    {{ time }} <br>
    {{msg}}
  </div>
</template>

<script>
  import moment from 'moment';
  require('moment-precise-range-plugin');
  export default {
    name: 'Message',
    data() {
      return {
        time: this.timeSince(),
        msg: 'since the leave campaign said Turkey is going to join the European Union.',
      }
    },

    methods: {
      timeSince: function () {
        const brexitAnnouncment = moment.utc('2016-05-23T10:28:44+01:00');
        return moment.preciseDiff(brexitAnnouncment, Date.now());
      }
    }
  }
</script>
