import React from "react";
import Articles from "./Articles";

function SectionsArticles() {
  return (
    <div>
      <div className="App">
        <h1 className="text-3xl text-center font-bold underline">
          Comprendre les props en React JS!
        </h1>

        <Articles id={1} title="Hello, earth!">
          <p>
            <strong className="text-lime-300">Earth</strong> ipsum dolor sit
            amet consectetur adipisicing elit. Illum animi adipisci tempora ipsa
            obcaecati rerum iusto corrupti, tempore velit expedita error alias
            dolores, maxime ea fugit qui omnis? A voluptatibus molestiae at rem!
            Omnis, dolor nisi at aperiam nobis voluptate.
          </p>
        </Articles>

        <Articles id={2} title="Hello, moon!">
          <p>
            <strong className="text-lime-300">Moon</strong> ipsum dolor sit amet
            consectetur adipisicing elit. Illum animi adipisci tempora ipsa
            obcaecati rerum iusto corrupti, tempore velit expedita error alias
            dolores, maxime ea fugit qui omnis? A voluptatibus molestiae at rem!
            Omnis, dolor nisi at aperiam nobis voluptate.
          </p>
        </Articles>

        <Articles id={3} title="Hello, world!">
          <p>
            <strong className="text-lime-300">World</strong> ipsum dolor sit
            amet consectetur adipisicing elit. Illum animi adipisci tempora ipsa
            obcaecati rerum iusto corrupti, tempore velit expedita error alias
            dolores, maxime ea fugit qui omnis? A voluptatibus molestiae at rem!
            Omnis, dolor nisi at aperiam nobis voluptate.
          </p>
        </Articles>
      </div>
    </div>
  );
}

export default SectionsArticles;
