var m_task = [];
class Encaps {
    
    setTask(task) {
        m_task.push(task);
    }

    getTasks() {
        return m_task;
    }
}