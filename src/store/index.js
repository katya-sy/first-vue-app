import { createStore } from "vuex";
import { PostModule } from "./PostModule";

export default createStore({
  modules: {
    post: PostModule,
  },
});
