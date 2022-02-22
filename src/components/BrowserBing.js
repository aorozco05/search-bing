import React, { useEffect, useState } from "react";
import ContainerBing from "./ContainerBing";
import axios from "axios";
import { API_KEY_COOKIE, BING_ENDPOINT } from "../Api/Endpoint-bing.js"
import { Form } from 'react-bootstrap';

export default function BrowserBing() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const changeSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search != '') {
      axios.get(BING_ENDPOINT + search, {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY_COOKIE
        }
      }).then(function (data) {
        setResult(data.data.suggestionGroups[0].searchSuggestions)
      });
    }

  }, [search])

  return (
    <div className="container blogcontainer">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Query" onChange={changeSearch} />
      </Form.Group>
      <ContainerBing data={result} />
    </div>
  );
}