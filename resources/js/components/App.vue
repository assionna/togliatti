<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3>Менеджер задач</h3>
                    </div>

                    <b-navbar type="light" variant="light">
                        <b-navbar-nav>
                            <b-nav-item>
                                <b-icon-plus-circle
                                    @click="visibleAddTask=!visibleAddTask"
                                ></b-icon-plus-circle>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-navbar>

                    <add-task
                        v-show="visibleAddTask"
                    ></add-task>

                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddTask from './templates/AddTask';
export default {
    data() {
        return {
            visibleAddTask: false,
        }
    },
    components:{ AddTask },
}
</script>

<style>

</style>
