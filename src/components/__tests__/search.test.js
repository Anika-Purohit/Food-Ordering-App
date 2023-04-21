import Body from "../Body" ;
import { render, waitFor,fireEvent } from "@testing-library/react";
import reduxStore from "../../utils/reduxStore.js"
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{                                         // faking fetch
return Promise.resolve({
json:()=>{
return Promise.resolve(RESTAURANT_DATA);},
});
});

test("Shimmer should load on homepage",()=>{                         // test #1 starts
    const body = render(
    <StaticRouter>
    <Provider store={reduxStore}>
    <Body />
    </Provider>    
    </StaticRouter>    
    );
const shimmer = body.getByTestId("shimmer");
expect(shimmer.children.length).toBe(20);
console.log(shimmer);
    });

test("Restaurant should load on homepage",async()=>{                 // test #2 starts
        const body = render(
        <StaticRouter>
        <Provider store={reduxStore}>
        <Body />
        </Provider>    
        </StaticRouter>    
        );
    await waitFor(()=> expect(body.getByTestId("search-button")));    
    
    const restList = body.getByTestId("rest-list");
    expect(restList.children.length).toBe(20);
        });    
test("Search for string food",async()=>{                             // test #3 starts
const body = render(
<StaticRouter>
<Provider store={reduxStore}>
<Body />
</Provider>    
</StaticRouter>    
);
await waitFor(()=> expect(body.getByTestId("search-button")));

const input = body.getByTestId("search-input");

fireEvent.change(input,{target:{
value:"food",
},
});
const searchBtn = body.getByTestId("search-button");
fireEvent.click(searchBtn);
const restList = body.getByTestId("rest-list")
expect(restList.children.length).toBe(20);
});