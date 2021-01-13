<template>
  <div id="demo" class="demo">
    <div class="demo-main">
      <h1>this is demo</h1>

      <h2>图片/静态资源的几种使用方式</h2>
      wepback处理<img src="../assets/images/logo.png" alt="" />
      server提供<img src="/images/avatar.jpg" alt="" />
      wepback处理<img src="@/assets/images/logo.png" alt="" />
      <h3>动态</h3>
      <img :src="`/images/${avatar}.jpg`" alt="" />
      <img :src="`../assets/images/${logo}.png`" alt="" />
      <h3>背景图片</h3>
      <div class="testbg"></div>

      <h2>组件使用</h2>
      <Comp />

      <h2>接口使用</h2>
      <div>
        <p>城市{{ apiData.city }}</p>
      </div>

    </div>
  </div>
</template>

<script>
// import Comp from '@/components/Comp'
import Comp from '@comp/Comp'
// import { getDemo } from '@api/demoApi'
import { getDemo } from '@api'

export default {
  name: 'Demo',
  components: {
    Comp
  },
  // props: {},
  data() {
    return {
      avatar: 'avatar',
      logo: 'logo',
      apiData: ''
    }
  },
  computed: {

  },
  watch: {

  },
  // created() {},
  async mounted() {
    // TEST: remove comment when build
    // TEST: element
    this.$message('hello element ui')
    // TEST: remove console.log when build
    console.log('mounted');
    // TEST: api-get
    const data = await getDemo()
    console.log('api re', data)
    this.apiData = data;
  },
  methods: {

  }
}
</script>

<style>
#demo { /* stylelint-disable-line */

}
.testbg {
  height: 300px;
  /* background: url('/images/avatar.jpg') no-repeat; */
  background: url('../assets/images/logo.png') no-repeat;
}

.demo-main {
  color: #333;
}
</style>
