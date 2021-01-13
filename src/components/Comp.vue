<template>
    <div class="prefix-comp">
        this is a comp.
    </div>
</template>

<script>
export default {
  name: "Comp",
  props: {
      prop1: {
          require: false,
          type: String,
          default: ""
      }
  },
  data() {
      return {};
  },
  // watch: {},
  // computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style>

</style>
