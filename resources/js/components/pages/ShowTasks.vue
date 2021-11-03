<template>
<div class="">

    <b-container fluid>
        <b-table
            :items="tasks"
            :fields="fields"
            show-empty
            small
        >
            <template #cell(name)="row">
            {{ row.value }}
            </template>

            <template #cell(actions)="row">
                <b-button size="sm" @click="row.toggleDetails">
                    <b-icon-pencil></b-icon-pencil>
                </b-button>

                <b-button size="sm" @click="deleteTask(row.item)" class="mr-1">
                    <b-icon-basket></b-icon-basket>
                </b-button>

            </template>

            <template #row-details="row">
                <b-card>
                    <b-row class="my-1"
                        v-for="(value, key) in row.item" :key="key"
                    >
                        <b-col
                            v-if="key !== 'id' && key !== '_showDetails'"
                        >
                            <b-col sm="2">
                                <label for="input-small">{{ key }}:</label>
                            </b-col>

                            <b-col sm="10">
                                <b-form-input id="input-small" size="sm"
                                    :value="value"
                                    v-model="row.item[key]"
                                ></b-form-input>
                            </b-col>
                        </b-col>

                    </b-row>
                     <b-button size="sm" @click="changeField(row.item)" class="mr-2">
                        Сохранить изменения
                    </b-button>
                </b-card>
            </template>

        </b-table>
    </b-container>
</div>

</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data() {
        return {
            fields: [
                { key: 'name', label: 'Задача', sortable: true},
                { key: 'date', label: 'Дата', sortable: true, class: 'text-center' },
                { key: 'time', label: 'Время выполения', sortable: true, class: 'text-center' },
                { key: 'comment', label: 'Комментарий', sortable: true, class: 'text-center' },
                { key: 'status', label: 'Статус', sortable: true, class: 'text-center' },
                { key: 'actions', label: '', class: 'text-center '},
            ],
            items: {
                name:  '',
                date: '',
                time: '',
                comment: '',
                status: '',
            },
        }
    },
    computed: {
        sortOptions() {
        return this.fields
            .filter(f => f.sortable)
            .map(f => {
                return { text: f.label, value: f.key }
            })
        },
        tasks () {
            return this.$store.state.tasks;
        }
    },
    created () {
        this.getTasks()
    },
    methods: {
        ...mapActions(['getTasks']),
        deleteTask(task) {
            this.$store.dispatch('deleteTaskFromDB', {task});
            this.getTasks()
        },
        changeField(task) {
            task._showDetails = false
            this.$store.dispatch('changeTaskFromDB', {task});
        },
    }
  }
</script>
