<template>
  <div id="view" class="view">
    <div class="view-main">
      this is view
    </div>
    <Comp />
  </div>
</template>

<script>
import Comp from '@components/Comp.vue'
import { getDemo } from '@api'

export default {
  name: 'View',
  components: {
    Comp
  },
  // props: {},
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  // created() {},
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
#view{ /* stylelint-disable-line */
}
.view-main {
  color: #333;
}
</style>
