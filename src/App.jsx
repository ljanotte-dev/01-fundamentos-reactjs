import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernades"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas mollitia alias impedit eligendi nihil quis, natus, quam reiciendis ex, consequatur perspiciatis totam. Dolor molestiae reiciendis labore eius ipsum quam!"
      />
    </div>
  );
}
