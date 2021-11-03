import api from '../api/IndexDB';

export default {
    addTaskToDB ({commit},{task}) {
        return api.saveTask(task);
    },
    async getTasks ({commit}) {
        let tasks = await api.getTasks();
        commit('SET_TASKS', tasks);
    },
    deleteTaskFromDB ({commit},{task}) {
        return api.deleteTask(task);
    },
    changeTaskFromDB ({commit},{task}) {
        return api.saveTask(task);
    }
}
