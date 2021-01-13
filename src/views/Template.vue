<template>
  <div id="template" class="template">
    <div class="template-main">
      this is template for quickly copy!
    </div>
    <Comp />
  </div>
</template>

<script>
import Comp from '@comp/Comp'
// import { getDemo } from '@api/demoApi.js'

export default {
  name: 'Template',
  components: {
    Comp
  },
  // props: {},
  data() {
    return {
      avatar: 'avatar',
      logo: 'logo'
    }
  },
  computed: {

  },
  // watch: {},
  // created() {},
  mounted() {
    console.log('mounted');
  },
  methods: {

  }
}
</script>

<style>
#template { /* stylelint-disable-line */

}

.template-main {
  color: #333;
}
</style>
