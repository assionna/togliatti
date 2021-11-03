<template>
<b-form
    v-show="addDisabled"
>
    <b-card bg-variant="light" class="text-center">
        <b-row class="my-1"
            v-for="(value, key) in items" :key="key"
        >
            <b-col sm="2">
                <label for="input-small">{{ key }}:</label>
            </b-col>

            <b-col sm="10">
                <b-form-input id="input-small" size="sm"
                    :value="value"
                    v-model="items[key]"
                ></b-form-input>
            </b-col>
        </b-row>
        <b-button variant="outline-secondary"
            @click="addTask()"
        >Сохранить</b-button>
    </b-card>
</b-form>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return{
            items: {
                name:  '',
                date: '',
                time: '',
                comment: '',
                status: '',
            },
            addDisabled: false,
        }
    },
    methods: {
        ...mapActions(['getTasks','addTaskToDB']),
        async addTask () {
            this.addDisabled = true;

            const task = {
                name: this.items.name,
                date: this.items.date,
                time: this.items.time,
                comment: this.items.comment,
                status: this.items.status,
            };
            console.log('Добавлены в хранилище' + JSON.stringify(task));
            await this.addTaskToDB({task});
            this.addDisabled = false;
            this.items = {
                name:  '',
                date: '',
                time: '',
                comment: '',
                status: '',
            };
            this.getTasks()
        }
    }
}
</script>

<style>

</style>
