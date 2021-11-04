export const createRandomTasks = (titles) => {
    let tasks = [];
    for (let index = 0; index < titles.length; index++) {
        const id = Math.floor(Math.random() * 10000);
        const title = titles[index];
        tasks[index] = {'id': id, 'title': title};
    }
    return tasks;
}