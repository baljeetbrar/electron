import React from "react";
import Layout from './Component/ThemeLayout/Layout.jsx';
import './Component/Sass/Main-Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApiHandler from "./Component/ApiHandler/ApiHandler.jsx";

const App = () => {
	return (
		<ApiHandler>
			<div className="app-wrapper"> 
				<Layout />
			</div>			
		</ApiHandler>
	);
}

export default App;
