import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Starwars from "./Starwars";
import Contacts from "./Contacts";
import {aboutMePage,
    contactPage,
    homePage,
    starWarsPage} from "../utils/constants";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {

    return (
        <Switch>
            {/*    Организовываем переключатель по маршрутам*/}
            {/*    У route есть обязательные поля:
        Path: Путь, который будет устанавливаться в браузерную строку, совмещая компонент
        Exact: проверка пути с точностью до символа
        */}
            <Route path={[`/`, `/${homePage}`]} exact component={Home}/>
            <Route path={`/${aboutMePage}/:hero`} exact component={AboutMe}/>
            <Route path={`/${contactPage}`} exact component={Contacts}/>
            <Route path={`/${starWarsPage}`} exact component={Starwars}/>
            {/*default route errorPage*/}
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;