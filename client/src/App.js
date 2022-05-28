import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Footer, Header } from "./components";
import { HomeLayout } from "./layouts";


const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <main className="container-fluid">
                    <Routes>
                        <Route path="/" element={<HomeLayout />} />
                    </Routes>
                </main>
                <Footer />
            </Provider>
        </BrowserRouter>
    );
};

export default App;