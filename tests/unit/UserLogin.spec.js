import UserLogin from "@/components/UserLogin";
import { mount } from "@vue/test-utils";

describe("UserLogin", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(UserLogin);
  });

  it("Show guest record for guest", async () => {
    await wrapper.setData({ isLogged: false });
    expect(wrapper.find('[data-testid="login-text"]').text()).toBe("Guest");
  });

  it("Show Logged user record for logged user", async () => {
    await wrapper.setData({ isLogged: true });
    expect(wrapper.find('[data-testid="login-text"]').text()).toBe(
      "Logged user"
    );
  });
});
