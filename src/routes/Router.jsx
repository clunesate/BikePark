import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RentPage from '../pages/Rent.page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<RentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
