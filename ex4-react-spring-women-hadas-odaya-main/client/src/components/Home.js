import React from 'react'; // Import React, the core library for building user interfaces.
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom for navigation.
import Wrapper from './Wrapper'; // Import a custom Wrapper component for consistent layout or styling.

import neworderImage from '../images/new order.png';
import oldOrderImage from '../images/old order.png';
import cartImage from '../images/your cart.png';

/**
 * Home component that serves as the main landing page of the application.
 * It provides navigation options to different sections like creating a new order,
 * viewing old orders, and accessing the cart.
 * @returns {JSX.Element} The Home page component
 */
const Home = () => {
    // useNavigate is a hook provided by react-router-dom.
    // It returns a function that can be used to navigate programmatically.
    const navigate = useNavigate();

    return (
        <Wrapper> {/* Wrapper component for consistent layout and styling */}
            {/* Main heading for the Home page */}
            <h2 className="text-center">Home🏠</h2>

            {/* Container for navigation buttons */}
            <div className="d-flex justify-content-center mt-4 flex-wrap">
                {/* Button to navigate to the new order page.
                    onClick handler uses navigate function to go to /newOrder route.
                    className applies Bootstrap classes for styling and layout. */}
                <img
                    src={neworderImage}
                    alt="New Order"
                    onClick={() => navigate('/newOrder')}
                    className="mx-3"
                    style={{ cursor: 'pointer' }}
                />

                {/* Link to navigate to the old orders page.
                    The 'to' prop defines the target route.
                    className applies Bootstrap classes for styling and layout. */}
                <Link to={'/oldOrder'} className={'mx-3'}>
                    <img
                        src={oldOrderImage}
                        alt="Old Order"
                        style={{ cursor: 'pointer' }}
                    />
                </Link>

                {/* Link to navigate to the cart page.
                    The 'to' prop defines the target route.
                    className applies Bootstrap classes for styling and layout. */}
                <Link to={'/cart'} className={'mx-3'}>
                    <img
                        src={cartImage}
                        alt="Your Cart"
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>
        </Wrapper>
    );
}

export default Home; // Export the Home component as the default export of the module.
