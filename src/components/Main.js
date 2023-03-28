import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import Starwars from "./Starwars";
import Contacts from "./Contacts";
import {
    aboutMePage,
    contactPage,
    homePage,
    starWarsPage
} from "../utils/constants";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = (props) => {

    return (
        <Switch>
            {/*    Организовываем переключатель по маршрутам*/}
            {/*    У route есть обязательные поля:
        Path: Путь, который будет устанавливаться в браузерную строку, совмещая компонент
        Exact: проверка пути с точностью до символа
        По стандарту у всех компонентов пропсы прилетают из routing.

        Для того что бы передать свои пропсы можно использовать функцию рендер
        в которую нужно передать routeProps и затем передать в компонент
        routeProps и можно передать уже все необходимое что пришло в props в компонент
        */}
            <Route path={[`/`, `/${homePage}`, `/${homePage}/:hero`]} exact
                   render={(routeProps) =>
                       <Home {...routeProps} hero={props.hero} changeHero={props.changeHero}/>}
            />
            <Route path={[`/${aboutMePage}/:hero`, `/${aboutMePage}`]} exact
                   render={(routeProps) =>
                       <AboutMe {...routeProps} changeHero={props.changeHero} hero={props.hero}/>}/>
            {/*<AboutMe match={{routeProps.match}} changeHero={props.changeHero}/>*/}

            <Route path={`/${contactPage}`} exact component={Contacts}/>
            <Route path={`/${starWarsPage}`} exact component={Starwars}/>
            {/*default route errorPage*/}
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;