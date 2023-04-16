import { render } from "@testing-library/react";
import { Header } from "../Header"; 
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header",()=>{
const header = render(
<StaticRouter>  
<Provider store={reduxStore}>
<Header/>
</Provider>
</StaticRouter>  );
const logo = header.getAllByTestId("logo");
console.log(logo[0]);
expect(logo[0].src).toBe("http://localhost/dummy.jpeg");
});

test("Cart initial value",()=>{
    const header = render(
    <StaticRouter>  
    <Provider store={reduxStore}>
    <Header/>
    </Provider>
    </StaticRouter>  );
    const cart = header.getByTestId("cart");
    
    expect(cart.innerHTML).toBe("Cart - 0 items");
    });