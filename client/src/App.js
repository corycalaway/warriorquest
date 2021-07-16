import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./components/counter";
import Backpack from './components/backpack';
import Home from './components/home';
import "tailwindcss/tailwind.css"

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/backpack" component={Backpack} />
          </Switch>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
