import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './app.module.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Lubni Morais"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae temporibus perferendis, repellendus, est magnam ratione, aspernatur voluptatibus assumenda dolorum deleniti non animi sapiente nisi voluptate excepturi commodi optio? Placeat?"
          />
        </main>
      </div>
    </div>
  );
}



export { App }
