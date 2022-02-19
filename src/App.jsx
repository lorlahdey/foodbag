import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import './styles/main.css'

function App() {
	return (
		<div className='container'>
			<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/cart'>
							<Cart />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/sign-up'>
							<SignUp/>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>    
	);
}

export default App;