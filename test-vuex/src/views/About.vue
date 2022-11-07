<template>
  <div>
    {{ count }} 是{{ judge }}
    <button @click="increase">+1</button>
    <button @click="reduce">-1</button>
    <button @click="add">异步加10</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState({
      count: 'count'
    }),
    ...mapGetters({
      judge: 'judge'
    })
  },
  methods: {
    add() {
      this.$store.dispatch({
        type: 'add',
        amount: 10
      });
    },
    ...mapActions({}),

    increase() {
      //dispatch触发action中的方法
      this.$store.dispatch('increase', 10);
    },

    reduce() {
      //dispatch
      // console.log(this);
      this.$store.dispatch('reduce', 10);
      //
    },
    ...mapMutations([])
  },
  model: {}
};
</script>

<style scoped></style>
