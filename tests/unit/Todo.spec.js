import TodoList from "@/components/TodoList.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      data: () => ({
        newTodo: "",
        todos: [
          {
            id: 1,
            text: "Learn Vue.js 3",
            completed: false,
          },
        ],
      }),
    });
  });

  it("TodoList should be mounted", () => {
    expect(wrapper.get('[data-test="todo"]').exists()).toBe(true);
  });

  it("Add new todo should render new item", async () => {
    const initialTodosLength = wrapper.vm.$data.todos.length;
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(
      initialTodosLength
    );

    await wrapper.get('[data-test="new-todo"]').setValue("new todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.vm.$data.todos).toHaveLength(initialTodosLength + 1);
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(
      initialTodosLength + 1
    );
  });

  it("Mark todo as completed on trigger checkbox", async () => {
    expect(wrapper.vm.$data.todos[0].completed).toBe(false);

    await wrapper.findAll('[data-test="todo-checkbox"]')[0].trigger("click");

    expect(wrapper.vm.$data.todos[0].completed).toBe(true);
    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  });
});
