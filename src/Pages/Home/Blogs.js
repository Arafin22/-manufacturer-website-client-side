import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div class="collapse-content">
          <p>1.Avoid Unnecessary Renders</p>
          <p>2.Virtualizing or Windowing</p>
          <p>3.Use Production Build and use CDN</p>
          <p>4.React Fragments</p>
          <p>5.Dependency Optimization</p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p>Mainly Four Kinds of React State to Manage</p>
          <p>1.Global state - use Context Api</p>
          <p>2.Local state - use useState </p>
          <p>3.Server state - use React Quary</p>
          <p>
            4.URL state - sometime without fetching data ,get data url
            parameters and queryParams
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          Why you do not set the state directly in React?
        </div>
        <div class="collapse-content">
          <p>
            React always return present value . When we directly set state,it
            does not set state ontime.its create a painding situation.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div class="collapse-content">
          <p>
            The Prototypal Inheritance is a feature in javascript. one object to
            used methods and properties in other objects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
