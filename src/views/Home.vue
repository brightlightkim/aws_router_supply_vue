<template>
  <div>
    <h1>Current AWS Routers Status</h1>

    <table>
      <thead>
        <tr class="heading">
          <td>Number</td>
          <td>ID</td>
          <td>TYPE</td>
          <td>LOCATION</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="router in routers" v-bind:key="router.id">
          <td v-if="(router.number % 2) == 0" class="second_row">{{ router.number }}</td>
          <td v-if="(router.number % 2) == 0" class="second_row">{{ router.id }}</td>
          <td v-if="(router.number % 2) == 0" class="second_row">{{ router.type }}</td>
          <td v-if="(router.number % 2) == 0" class="second_row">{{ router.location }}</td>
          <td v-if="(router.number % 2) == 1">{{ router.number }}</td>
          <td v-if="(router.number % 2) == 1">{{ router.id }}</td>
          <td v-if="(router.number % 2) == 1">{{ router.type }}</td>
          <td v-if="(router.number % 2) == 1">{{ router.location }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    routers() {
      return this.$root.$data.getRouters();
    }
  }
}
</script>

<style scoped>

h1{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 50px;
  background-color: #516bff;
  color: white;
  border-radius: 20px;
}
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.heading {
  height: 50px;
  background-color: #516bff;
  color: white;
}

thead > tr > td:hover {
  background-color: #8190ff;
  cursor: pointer;
}

tbody > tr > td:hover {
  background-color: #aebaff;
  cursor: pointer;
  color: white;
}

tbody > tr {
  background-color: #f7f8ff;
}

td {
  padding: 5px;
}

.second_row{
  background-color: #e3e5fd;
}
</style>
