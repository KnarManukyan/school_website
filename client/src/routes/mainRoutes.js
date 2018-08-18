import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import RouteError from '../components/error/RouteError.js';
import App from '../components/App.js';
import Login from '../container/Login/loginContainer.js';
import Home from '../components/home/Home.js';
import EditStudentContainer from '../container/Students/EditStudent/EditStudentContainer.js';
import AddStudentContainer from '../container/Students/AddStudent/AddStudentContainer.js';
import StudentsList from '../container/Students/StudentsList/StudentsListContainer.js';
import TeachersList from '../container/Teachers/TeachersList/TeachersListContainer.js';
import ClassesList from '../container/Classes/ClassesList/ClassesListContainer.js';
import CoursesList from '../container/Courses/CoursesList/CoursesListContainer.js';
import EditTeacherContainer from '../container/Teachers/EditTeacher/EditTeacherContainer.js';
import AddTeacherContainer from '../container/Teachers/AddTeacher/AddTeacherContainer.js';
import EditClassContainer from '../container/Classes/EditClass/EditClassContainer.js';
import AddClassContainer from '../container/Classes/AddClass/AddClassContainer.js';
import EditCourseContainer from '../container/Courses/EditCourse/EditCourseContainer.js';
import AddCourseContainer from '../container/Courses/AddCourse/AddCourseContainer.js';
import { PrivateRoute } from './privateRoutes';
import {history} from '../history.js';

export default class BrowserRouter extends Component{
  render (){
    return(
        <Router history={history}>
          <Switch>
            <Route path={"/"} component={App} exact/>
            <PrivateRoute exact path="/home" component={Home} />
            <Route  path={"/login"} render={() => (
              localStorage.getItem('user') ? (<Redirect to={"/home"}/>) : (<Login />))}/>
              <PrivateRoute path={"/students"} component={StudentsList} exact/>
              <PrivateRoute path={"/students/add"} component={AddStudentContainer} exact/>
              <PrivateRoute path={"/students/edit/:id"} component={EditStudentContainer} exact/>
              <PrivateRoute path={"/teachers"} component={TeachersList} exact/>
              <PrivateRoute path={"/teachers/add"} component={AddTeacherContainer} exact/>
              <PrivateRoute path={"/teachers/edit/:id"} component={EditTeacherContainer} exact/>
              <PrivateRoute path={"/classes"} component={ClassesList} exact/>
              <PrivateRoute path={"/classes/add"} component={AddClassContainer} exact/>
              <PrivateRoute path={"/classes/edit/:id"} component={EditClassContainer} exact/>
              <PrivateRoute path={"/courses"} component={CoursesList} exact/>
              <PrivateRoute path={"/courses/add"} component={AddCourseContainer} exact/>
              <PrivateRoute path={"/courses/edit/:id"} component={EditCourseContainer} exact/>
            <Route component={RouteError} />
          </Switch>
        </Router>
    )
  }
}
