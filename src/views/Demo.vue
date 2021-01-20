<template>
  <div id="demo" class="demo">
    <div class="demo-main">
      <h1>this is demo</h1>

      <h2>图片/静态资源的几种使用方式</h2>
      wepback处理<img src="../assets/images/logo.png" alt="assets" />
      server提供<img src="/images/avatar.jpg" alt="static" />
      <!-- wepback处理<img src="@/assets/images/logo.png" alt="assets" />  ok-->
      <h3>动态路径</h3>
      <img :src="require(`../assets/images/${logo}.png`)" alt="动态路径" />
      <img :src="`/images/${avatar}.jpg`" alt="动态路径" />
      <img :src="imgPath" alt="动态路径" />
      <h3>背景图片</h3>
      <div class="testbg"></div>

      <h2>组件使用</h2>
      <Comp />

      <h2>接口使用</h2>
      <div>
        <p>城市{{ apiData.city || '接口不通' }}</p>
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
      apiData: '',
      imgPath: ''
    }
  },
  created() {
    this.imgPath = `/images/${this.avatar}.jpg`
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
    console.log('mounted')
    // TEST: api-get
    const data = await getDemo().catch(e => console.error('接口出错', e)) || {}
    this.apiData = data
  },
  methods: {

  }
}
</script>

<style lang="less">
#demo { /* stylelint-disable-line */
  img {
    width: 200px;
  }
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
