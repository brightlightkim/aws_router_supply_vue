<template>
    <div>
        <h1>Create a Router</h1>
        <form v-if="creating" @submit.prevent="addRouter">
            <input v-model="type" placeholder="Type" />
            <p></p>
            <textarea v-model="location"></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
        <div v-else>
            <p>Thank you for submitting a router.</p>
            <p>
                <a @click="toggleForm" href="#">Submit another router</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'create',
    data() {
        return {
            creating: true,
            type: '',
            loaction: '',
        }
    },
    methods: {
        toggleForm() {
            this.creating = !this.creating;
        },
        addRouter() {
            this.$root.$data.addRouter(this.type, this.location);
            this.type = "";
            this.location = "";
            this.creating = false;
        },
    }
}
</script>

<style scoped>/**specific to this view */
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>