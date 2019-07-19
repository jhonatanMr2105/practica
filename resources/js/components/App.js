import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import CourseList from './CourseList';
import NotFound from './NotFound';
import NivelesList from './NivelesList';
import SingleCourse from './SingleCourse';






const App = () => {
    return (
        <div className="container">
            <div className="title m-b-8">
                <h1 className="display-4">Curso Miskito con(leinalnic)</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <CourseList />
                </div>

            </div>
    </div>

    )
    }
const Root = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/cursos/:id" exact component={SingleCourse}/>
            <Route path="/nivel/:id" exact component={NivelesList} />
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>
)

if (document.getElementById('app')) {
    // ReactDom.render(<App />, document.getElementById('app'));
     ReactDom.render(<Root />, document.getElementById('app'));
}
