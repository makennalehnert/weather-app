import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Header from "./Header";
import Nav from './Nav'
import Chicago from '../Chicago'
import LosAngeles from '../LosAngeles'
import NewYork from '../NewYork'
import NotFound from './NotFound'
import Footer from './Footer'

export default function Layout(){
    return (
        <div className="contain">
        <Header/>
        <Nav/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/chicago' element={<Chicago/>}/>
            <Route exact path='/losangeles' element={<LosAngeles/>}/>
            <Route exact path='/newyork' element={<NewYork/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </div>
    )
}