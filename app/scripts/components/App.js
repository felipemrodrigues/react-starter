import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <Header />
    <section className="main">
      <div className="container">
        <AddTodo />
        <VisibleTodoList />
      </div>
    </section>
    <Footer />
  </div>
);

export default App;
