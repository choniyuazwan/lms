import React from "react";
import { Container } from "semantic-ui-react";

import CounterView from "./views/counter-view";
import ContactView from "./views/contact-view";

export default function App() {
  return (
    <Container>
      <h1>Implementing React Hook, Navigation and Redux</h1>
        <CounterView />
        <ContactView />
    </Container>
  );
}
