import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CampaignDetails, CreateCampaign, Home, Profile , LandingPage} from './pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      </Routes>
    </div>
  )
}

export default App