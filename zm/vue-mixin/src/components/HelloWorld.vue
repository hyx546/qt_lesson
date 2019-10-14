<template>
  <div>
    <my-dialog />
    <my-loading />
  </div>
</template>

<script>
import MyDialog from './MyDialog';
import MyLoding from './MyLoading';
export default {
  data () {
    return {

    }
  },
  components: {
    MyLoding,
    MyDialog
  }
}
</script>

<style>

</style>