import * as React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { ProductListings } from "./ProductListings/ProductListings";

export const Products = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Products</h2>
      <ProductListings />
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <ProductListing />
        </Route>
        <Route path={match.path}>
          <h3>Product Listing Page.</h3>
        </Route>
      </Switch>
    </div>
  );
};

function ProductListing() {
  let { productId } = useParams();
  return <h3>Requested topic ID: {productId}</h3>;
}
